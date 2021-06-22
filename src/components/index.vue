<template>
    <div class="main">
        <nav class="navbar ">
       
        <button type="button" @click="outload" class="btn btn-default navbar-btn">退出登录</button>
        <router-link to="/personal"><button type="button" class="btn btn-default navbar-btn">个人中心</button></router-link>
        </nav>
        <div class="container">
           
            <group-com></group-com>
		    
           
        </div>
    </div>
    
</template>

<script>

import axios from 'axios';
import store from "../store/index.js"
    import $ from "jquery"
  import qs from 'qs'
import groupCom from "./group.vue"

export default {
  name: 'index',
  data(){
    return{
       
    }
  },
  
  methods:{
    outload(){
        axios.get('http://localhost:8080/spider/goout'
                ).then(res=>{   
                     store.commit('del_token');
                }).catch(error=>{
                    alert('报错'+error)
                })
    }
  },
  components:{
      
      groupCom,
  }
  
}
</script>

<style scoped>

/* .main{
  
     position: absolute;
    padding: 0;          
    margin: 0;        
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
    background:#EFEFEF; 
    
} */
.active{
    background: #1144AA;
}
nav{
    position: relative;
    background:#1144AA;
}
aside{
    width:190px ;
    margin-left: -100%;
   
}
.navbar {
    margin-bottom: 1px;
   
}

.navbar-form{
    position: absolute;
    left: 40%;
}
.navbar-btn{
    float: right;
    margin-right: 20px;
   
}
.container{
    position: relative;
}

.col{
    float: left;
}
		
.wrap {
		width: 100%;
		
	}			
.main-wrap {
	margin: 0 154px 0 220px;
    /* background: #1144AA; */
    /* border: 1px solid grey; */
}
.section{
    width: 100%;
    height: 4em;
    margin-top: 5px;
    background: #337ab7;
    padding-left:1em;
    border-radius: 7px;
    /* border: 1px solid grey; */
}
article{
    float: left;
    width: 100%;
    height: 100%;
}

.section button{
    float: left;
    height: 100%;
    width: 6em;
    font-weight: bold;
    margin-right: -100%;
    
    
}
.pagination{
    
    width: 280px;
    overflow: hidden;
    display: block;
    margin: 2em auto;
}
		


</style>
