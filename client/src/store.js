import Vue from 'vue'
import Vuex from 'vuex'
//plugins
import Axios from 'axios'
Vue.prototype.$http = Axios;


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rank: [{
                id: 1,
                name: "Mortal",
                minMasterPoints: 0
            }, {
                id: 2,
                name: "SemiDios",
                minMasterPoints: 100
            }, {
                id: 3,
                name: "Dios",
                minMasterPoints: 300
            },
            {
                id: 4,
                name: "Titán",
                minMasterPoints: 600
            }
        ],
        masterPoints: 0
    },
    mutations: {
        updateMasterPoints(state, qty) {
            state.masterPoints += qty;
        }

    },
    actions: {
        updateMasterPoints({
            commit
        }, qty) {
            commit('updateMasterPoints', qty);
        }
    }
})