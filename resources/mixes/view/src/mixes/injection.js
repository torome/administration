import promiseFinally from 'promise.prototype.finally';

import mixinAxios from './axios';
import mixinExtension from './extension';
import mixinComponent from './component';
import mixinModule from './module';
import mixinRouter from './router';

promiseFinally.shim();

export {
    mixinAxios,
    mixinComponent,
    mixinExtension,
    mixinModule,
    mixinRouter,
};
