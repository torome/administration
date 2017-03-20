import {
    mixinAxios,
    mixinComponent,
    mixinExtension,
    mixinModule,
    mixinRouter,
    mixinUse,
} from '../mixes/injection';

const injection = {};

function install(Vue) {
    mixinAxios(injection, Vue);
    mixinComponent(Vue, injection);
    mixinRouter(injection);
    mixinUse(injection);
    mixinExtension(injection);
    mixinModule(injection);
}

export default Object.assign(injection, {
    install,
});
