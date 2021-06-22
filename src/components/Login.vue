<template>

    <div class="Login">
         
        <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">用户名</span>
        <input type="text" v-model="username" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
        <span class="input-group-addon"  id="basic-addon1">密码</span>
        <input type="password" v-model="password" class="form-control" placeholder="密码" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">验证码</span>
        <input type="text" v-model="verifyCode"  class="form-control" placeholder="请输入验证码" aria-describedby="basic-addon1">
        </div>
        <img :src='"data:image/png;base64,"+verifypic' alt="验证码" title="看不清？点击换一下" @click="changeVerifyCode">
         <div class="btn-group btn-group-justified" role="group" aria-label="...">
        <div class="btn-group" role="group">
                <button type="button" @click="login" class="btn btn-default ">提交</button>
        </div>
         </div>
         <div class="alert alert-danger" id='notice' role="alert"></div>
        
    </div>

</template>
<style scoped>

.input-group{
    margin-top:2em;
}
.Login img{
    display: block;
    margin:0 auto;
    width: 60%;
}

.btn:focus,.btn:active:focus {
	outline: none;    
	border-color: transparent;    
	box-shadow:none;
    background: green;
}

</style>
<script>
import axios from 'axios';
import store from "../store/index.js"
    import $ from "jquery"
  import qs from 'qs'

export default {

    data(){
        return {
            username:'',
            password:'',
            verifyCode:'',
            verifypic:''
    }
    },
    created:function(){
      // this.verifypic='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'
        // let res={"data":"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","status":200,"statusText":"","headers":{"connection":"keep-alive","content-length":"2164","content-type":"application/json","date":"Wed, 21 Apr 2021 11:48:10 GMT","keep-alive":"timeout=60"},"config":{"url":"http://localhost:8080/spider/user/verifyCode","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}
        
        // this.verifypic=res.data;
        axios.get('http://localhost:8080/spider/user/verifyCode'
                ).then(res=>{   
                    
                    this.verifypic=res.data;
                    

                }).catch(error=>{
                    $("#notice").html('获取验证码失败'+error)
                })
    },
  
    methods:{
       
         login:function(){
            
               axios.post('http://localhost:8080/spider/user/login',qs.stringify({"username": this.username,"password": this.password,"verifyCode":this.verifyCode})
                ).then(res=>{
                    alert(res);
                    this.$store.commit('set_token',res.data.token);
                    console.log(store.state.token);
                    this.$router.push({path:'/index'});
                }).catch(error=>{
                    console.log('报错'+error)
                })
            },
        changeVerifyCode(){
           
            axios.get("http://localhost:8080/spider/user/verifyCode")
                .then(res=>{
                    
                    this.verifypic=res.data;
                })
                .catch(err=>{
                    alert("获取验证码失败"+err)
                            })
        }
    },

}
</script>
