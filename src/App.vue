<template>
  <div id="app">
    
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>


  </div>
</template>

<script>

import firstpage from './components/firstpage'
import personal from './components/personal'
import index from './components/index'
export default {
  name: 'App',
  date(){
    return{

    }
  },
  methods:{

  },
  components:{
    firstpage:firstpage,
    personal:personal,
    index:index
  }
}
</script>

<style>
#app {

  width: 100%;
  height: 100%;
  overflow: hidden;
  
}
</style>
