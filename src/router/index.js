import Vue from 'vue'
import Router from 'vue-router'

import firstpage from '../components/firstpage.vue'
import login from '../components/Login.vue'
import register from '../components/register.vue'
import index from '../components/index.vue'
import personal from '../components/personal.vue'
import detail from '../components/detail.vue'
// import { component } from 'vue/types/umd'
Vue.use(Router)

export default new Router({
  routes: [
    
    {path:'/',redirect:'/firstpage'},//重定向
    {path:'/firstpage',component:firstpage,
    children:[
      {
        path:'',redirect:"/firstpage/login"
      },
      {
      path:'login',component:login,
      },
    {
      path:'register',component:register
    }
  ]
  },{
    path:'/index',component:index,meta:{keepAlive:false}
  },
  {
    path:'/personal',component:personal
  },{
    path:'/detail',name:"detail",component:detail
  }
    
    
  ]
})

