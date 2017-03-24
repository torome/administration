import {
    mixinAxios,
    mixinBoard,
    mixinComponent,
    mixinDebug,
    mixinExtension,
    mixinLocal,
    mixinModule,
    mixinNavigation,
    mixinRouter,
    mixinSidebar,
    mixinUse,
} from '../mixes/injection';
import { t } from '../local';

const injection = {};

function install(Vue) {
    mixinDebug(injection);
    mixinLocal(injection);
    mixinComponent(Vue, injection);
    mixinAxios(injection, Vue);
    mixinBoard(injection);
    mixinNavigation(injection);
    mixinRouter(injection);
    mixinSidebar(injection);
    mixinUse(injection);
    mixinExtension(injection);
    mixinModule(injection);
}

export const trans = t;

export default Object.assign(injection, {
    install,
});
