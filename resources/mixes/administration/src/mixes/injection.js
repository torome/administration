import promiseFinally from 'promise.prototype.finally';

import mixinAxios from './axios';
import mixinBoard from './board';
import mixinComponent from './component';
import mixinExtension from './extension';
import mixinLocal from './local';
import mixinModule from './module';
import mixinNavigation from './navigation';
import mixinRouter from './router';
import mixinSidebar from './sidebar';
import mixinUse from './use';

promiseFinally.shim();

export {
    mixinAxios,
    mixinBoard,
    mixinComponent,
    mixinExtension,
    mixinLocal,
    mixinModule,
    mixinNavigation,
    mixinRouter,
    mixinSidebar,
    mixinUse,
};
