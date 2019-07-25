import Vue from 'vue'
import './plugins/vuetify'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import router from './router'
import store from './store'
// Importing the global css file
import "@/assets/css/customStyles.css"
// GLobal components
import './views/globalComponents/globalComponents';

Vue.config.productionTip = false

//plugins
import './plugins/formattedDate'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')