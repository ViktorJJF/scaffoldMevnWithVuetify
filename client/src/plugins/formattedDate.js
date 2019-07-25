//Global axios
import Vue from 'vue'
import helpers from './helpers'
// This is your plugin object. It can be exported to be used anywhere.
const MyPlugin = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue) {
        // We call Vue.mixin() here to inject functionality into all components.
        Vue.helpers = helpers
        Vue.prototype.$helpers = helpers
    }
};

Vue.use(MyPlugin);