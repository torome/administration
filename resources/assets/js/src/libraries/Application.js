import ItemList from "notadd/utilities/ItemList";
import patchMithril from "notadd/utilities/patchMithril";
import Translator from "notadd/libraries/Translator";
export default class Application {
    constructor() {
        patchMithril(window);
        this.routes = {};
        this.initializers = new ItemList();
        // this.session = null;
        // this.store = null;
        this.translator = new Translator();
        this.cache = {};
        this.booted = false;
        this.requestError = null;
        this.title = '';
        this.titleCount = 0;
    }

    boot(data) {
        this.data = data;
        this.translator.locale = data.locale;
        this.initializers.toArray().forEach(initializer => initializer(this));
    }

    // preloadedDocument() {
    //     if (this.data.document) {
    //         const results = this.store.pushPayload(this.data.document);
    //         this.data.document = null;
    //         return results;
    //     }
    //     return null;
    // }

    setTitle(title) {
        this.title = title;
        this.updateTitle();
    }

    setTitleCount(count) {
        this.titleCount = count;
        this.updateTitle();
    }

    updateTitle() {
        document.title = (this.titleCount ? `(${this.titleCount}) ` : '') +
            (this.title ? this.title + ' - ' : '');
    }

    request(originalOptions) {
        const options = Object.assign({}, originalOptions);
        options.background = options.background || true;
        extend(options, 'config', (result, xhr) => xhr.setRequestHeader('X-CSRF-Token', this.session.csrfToken));
        if (options.method !== 'GET' && options.method !== 'POST') {
            const method = options.method;
            extend(options, 'config', (result, xhr) => xhr.setRequestHeader('X-HTTP-Method-Override', method));
            options.method = 'POST';
        }
        options.deserialize = options.deserialize || (responseText => responseText);
        options.errorHandler = options.errorHandler || (error => {
                throw error;
            });
        const original = options.extract;
        options.extract = xhr => {
            let responseText;
            if (original) {
                responseText = original(xhr.responseText);
            } else {
                responseText = xhr.responseText || null;
            }
            const status = xhr.status;
            if (status < 200 || status > 299) {
                throw new RequestError(status, responseText, options, xhr);
            }
            if (xhr.getResponseHeader) {
                const csrfToken = xhr.getResponseHeader('X-CSRF-Token');
                if (csrfToken) application.session.csrfToken = csrfToken;
            }
            try {
                return JSON.parse(responseText);
            } catch (e) {
                throw new RequestError(500, responseText, options, xhr);
            }
        };
        if (this.requestError) this.alerts.dismiss(this.requestError.alert);
        const deferred = m.deferred();
        m.request(options).then(response => deferred.resolve(response), error => {
            this.requestError = error;
            let children;
            switch (error.status) {
                case 422:
                    children = error.response.errors
                        .map(error => [error.detail, <br/>])
                        .reduce((a, b) => a.concat(b), [])
                        .slice(0, -1);
                    break;
                case 401:
                case 403:
                    children = application.translator.trans('core.lib.error.permission_denied_message');
                    break;
                case 404:
                case 410:
                    children = application.translator.trans('core.lib.error.not_found_message');
                    break;
                case 429:
                    children = application.translator.trans('core.lib.error.rate_limit_exceeded_message');
                    break;
                default:
                    children = application.translator.trans('core.lib.error.generic_message');
            }
            error.alert = new Alert({
                type: 'error',
                children,
                controls: [
                    <Button className="Button Button--link" onclick={this.showDebug.bind(this, error)}>Debug</Button>
                ]
            });
            try {
                options.errorHandler(error);
            } catch (error) {
                this.alerts.show(error.alert);
            }
            deferred.reject(error);
        });
        return deferred.promise;
    }

    showDebug(error) {
        this.alerts.dismiss(this.requestErrorAlert);
        this.modal.show(new RequestErrorModal({error}));
    }

    route(name, params = {}) {
        const url = this.routes[name].path.replace(/:([^\/]+)/g, (m, key) => extract(params, key));
        const queryString = m.route.buildQueryString(params);
        const prefix = m.route.mode === 'pathname' ? '' : '';
        return prefix + url + (queryString ? '?' + queryString : '');
    }
}