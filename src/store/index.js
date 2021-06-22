import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        token:localStorage.getItem('token')?localStorage.getItem('token'):'',
        myname:''
    },
    mutations:{
        set_token(state,token){
            state.token=token;
            localStorage.setItem('token',token);
        },
        del_token(state){
            state.token='';
            localStorage.removeItem('token')
        }
    },
    actions:{

    }
})