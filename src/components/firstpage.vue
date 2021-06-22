<template>
<div class="main">
    <div class="firstpage">
        
        <div class="btn-group btn-group-justified" role="group" aria-label="...">
            <div class="btn-group" role="group">
                <router-link to="/firstpage/login"><button type="button" :class="{'active':activeIndex==0}" @click="activeChange(0)" class=" btn ">登录</button></router-link>
            </div>
            <div class="btn-group" role="group">
                <router-link to="/firstpage/register"><button type="button" :class="{'active':activeIndex==1}" @click="activeChange(1)" class="btn ">注册</button></router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</div>


</template>
<style scoped>
html{
    height: 100%;
}
body{
    height: 100%;
}
.active{
    background: green;
    color: honeydew;
}
.btn:focus,.btn:active:focus {
	outline: none;    
	border-color: transparent;    
	box-shadow:none;
}
.active:hover{
    background: green;
    color: honeydew;
}
.main{
  
     position: absolute;
    padding: 0;          
    margin: 0;        
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
    background: #1144AA; 
    
}
.firstpage{
    width: 394px;
    height: 456px;
    top:62px;
    right: 30px;
    position: absolute;
    background:#ffffff;
    color: rebeccapurple;
    padding:15px;
}

#app {

  width: 100%;
  height: 100%;
  
}
</style>
<script>
import register from './register.vue'
import login from './Login'
export default {
  components: {
      register,
      login
  },
    data(){
        return {
            activeIndex:0
        }
    },
    methods:{
        activeChange(a){
            this.activeIndex=a;
        }
    },

}
</script>
