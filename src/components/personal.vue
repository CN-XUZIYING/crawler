<template>
<div class="main">
     <router-link to="/index"><button type="button" class="btn btn-default navbar-btn">主页</button></router-link>
    <div class="messagepage">
        <button type="button" @click="changeMsg()" class="btn btn-primary">修改信息</button>
       <form>
        <fieldset disabled="disabled" id="field">
            <div class="form-group">
            <label for="disabledTextInput">用户名</label>
            <input type="text" v-model="newusername" id="disabledTextInput" disabled='disabled' class="form-control" placeholder="">

            <label for="disabledTextInput">年龄</label>
            <input type="text" v-model="newage" id="disabledTextInput" class="form-control" placeholder="">

            <label for="disabledSelect">性别</label>
            <select id="disabledSelect" class="form-control" v-model="newsex">
                <option>男</option>
                <option>女</option>
            </select>

            <label for="disabledTextInput">手机号</label>
            <input type="tel" v-model="newphone" id="disabledTextInput" class="form-control" placeholder="">

            <label for="disabledTextInput">邮箱</label>
            <input type="email" v-model="newemail" id="disabledTextInput" class="form-control" placeholder="">
            </div>
            
            <button type="submit" @click="submitMsg()" class="btn btn-success">确认修改</button>
            <button type="submit" @click="dischangeMsg()" class="btn btn-warning">取消修改</button>
        </fieldset>
    </form>
      
    </div>
</div>


</template>
<style scoped>
body{
    width: 100%;
    height: 100%;
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
.messagepage{
    position: relative;
    padding: 36px;
    width: 437px;
    height: 463px;
    margin: 0 auto;
    background:#ffffff;
    color: rebeccapurple;
  
}
label{
    margin-top: 5px;
}
.messagepage button[type='button']{
    position: absolute;
    top: 5px;
    right: 5px;
}

</style>
<script>
import $ from'jquery'
import axios from 'axios';
import store from "../store/index.js"
export default {
 
    data(){
        return {
            username:'1',
            newusername:'',
            age:'2',
            newage:'',
            sex:'男',
            newsex:'',
            phone:'3',
            newphone:'',
            email:'717776052@qq.com',
            newemail:'',
        }
    },
    created(){
        axios.get('http://localhost:8080/spider/user/message'
                ).then(res=>{   
                    alert(res);
                    res = res.data;
                    this.newusername=this.username=res.username;
                    this.newage=this.age=res.age;
                    this.newsex=this.sex=res.sex;
                    this.newphone=this.phone=res.phone;
                    this.newemail=this.email=res.email;
                    
                }).catch(error=>{
                   alert(error);
                })
    },
    methods:{
        changeMsg(){
            console.log('click')
            $('#field').removeAttr("disabled");
        },
        dischangeMsg(){
            this.newusername=this.username;
            this.newage=this.age;
            this.newsex=this.sex;
            this.newphone=this.phone;
            this.newemail=this.email;
             $('#field').attr("disabled","disabled");

        },
        submitMsg(){
            axios.post('http://localhost:8080/spider/user/changeMessage',qs.stringify({"phone":this.newphone,"age":this.newage,"sex":this.newsex,"email":this.newemail})
                ).then(res=>{
                    alert('修改成功');
                    this.username=this.newusername;
                    this.age=this.newage;
                    this.sex=this.newsex;
                    this.phone=this.newphone;
                    this.email=this.newemail;
                }).catch(error=>{
                    this.newusername=this.username;
                    this.newage=this.age;
                    this.newsex=this.sex;
                    this.newphone=this.phone;
                    this.newemail=this.email;
                      alert("失败："+error)
                })
            $('#field').attr("disabled","disabled");
        }
    },

}
</script>
