import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: require('./views/dashboard.vue').default,
        children: [{
            path: '/notas-bruses',
            name: 'brusesNotes',
            component: require('./views/brusesNotes.vue').default
        }, {
            path: '/notas-bruses2',
            name: 'brusesNotes2',
            component: require('./views/brusesNotes2.vue').default
        }]
    }]
})