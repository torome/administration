import promiseFinally from 'promise.prototype.finally';

import mixinAxios from './axios';
import mixinExtension from './extension';
import mixinComponent from './component';
import mixinModule from './module';
import mixinNavigation from './navigation';
import mixinRouter from './router';
import mixinUse from './use';

promiseFinally.shim();

export {
    mixinAxios,
    mixinComponent,
    mixinExtension,
    mixinModule,
    mixinNavigation,
    mixinRouter,
    mixinUse,
};
