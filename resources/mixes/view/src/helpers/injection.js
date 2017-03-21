import {
    mixinAxios,
    mixinBoard,
    mixinComponent,
    mixinExtension,
    mixinModule,
    mixinNavigation,
    mixinRouter,
    mixinSidebar,
    mixinUse,
} from '../mixes/injection';

const injection = {};

function install(Vue) {
    mixinAxios(injection, Vue);
    mixinBoard(injection);
    mixinComponent(Vue, injection);
    mixinNavigation(injection);
    mixinRouter(injection);
    mixinSidebar(injection);
    mixinUse(injection);
    mixinExtension(injection);
    mixinModule(injection);
}

export default Object.assign(injection, {
    install,
});
