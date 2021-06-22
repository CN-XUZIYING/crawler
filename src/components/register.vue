<template>
<div class="register">
        <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">用户名</span>
        <input type="text" v-model="username" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">手机号</span>
        <input type="tel" v-model="phone" class="form-control" placeholder="手机号码" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">密码</span>
        <input type="password" v-model="password" class="form-control" placeholder="密码" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">验证码</span>
        <input type="text" v-model="verifyCode"  class="form-control" placeholder="验证码" aria-describedby="basic-addon1">
        </div>
        <img :src='"data:image/png;base64,"+verifypic' alt="验证码" title="看不清？点击换一下"  @click="changeVerifyCode">
         <div class="btn-group btn-group-justified" role="group" aria-label="...">
            <div class="btn-group" role="group">
                <button type="button" @click="register" class="btn btn-default">提交</button>
            </div>
         </div>
        <div id="notice" class="alert alert-danger" role="alert"></div>
         
</div>


</template>
<style scoped>
.input-group{
    margin-top:1em;
}
.register img{
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
            phone:'',
            verifyCode:'',
            verifypic:''
        }
    },
    created(){
        
        axios.get('http://localhost:8080/spider/user/verifyCode'
                ).then(res=>{   
                    
                    this.verifypic=res.data;
                  

                }).catch(error=>{
                    $("#notice").html('注册失败'+error)
                })
    },
    methods:{
        register(){
             axios.post('http://localhost:8080/spider/register',qs.stringify({"username": this.username,"password": this.password,"phone":this.phone,"verifyCode":this.verifyCode,"age":null,"sex":"男","email":null})
                ).then(res=>{
                    $("#notice").html(res.data);
                
                }).catch(error=>{
                       $("#notice").html('报错'+error)
                })
        },
        changeVerifyCode(){
            axios.get('http://localhost:8080/spider/user/verifyCode'
                ).then(res=>{   
                    
                    this.verifypic=res.data;
                 

                }).catch(error=>{
                    $("#notice").html('获取验证码失败'+error)
                })
        }
    }
}
</script>
