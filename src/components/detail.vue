<template>
<div class="main">
     <router-link to="/index"><button type="button" class="btn btn-default navbar-btn">主页</button></router-link>
    <div class="firstpage">
        <h2>{{name}}</h2>
        <h3>概要1:{{title.first}}</h3>
        <h3>概要2:{{title.last}}</h3>
        <h5>关键词提取</h5>
        <table class="table .table-striped table-hover">
            <tbody>
            <tr>
                <th>关键词</th>
                <th>相关性</th>
            </tr>
            <tr v-for="(item,index) in listmsg" :key="index">
                <td>{{item.tag}}</td>
                <td>{{item.score}}</td>
            </tr>
            
            </tbody>
        </table>
        <h3>重要短语提取 <span>{{imphrase.first}}</span><span>{{imphrase.last}}</span></h3> 
        <h3>文章分类结果 <span>{{topic1}}</span></h3>
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
    width: 635px;
    /* height: 559px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background:#ffffff;
    color: rebeccapurple;
    padding:15px;
}
.table,.table th{
    text-align: center;
}
/* .table{
    
} */
span{
    display: inline-block;
    margin: 0 2em;
}

</style>
<script>
import axios from 'axios';


export default {

    data(){
        return {
            name:this.$route.query.title,
            detailobj:{},
            title:{},
            listmsg:[{}],
            imphrase:{},
            topic1:"",
        
        }
    },
    created(){
        // let res={"name":"进击的 Spring Cloud Alibaba —— 框架与服务","topic":"{\n  \"log_id\": 6913201314772573539,\n  \"item\": {\n    \"lv2_tag_list\": [{\n      \"score\": 0.816869,\n      \"tag\": \"软件\"\n    }],\n    \"lv1_tag_list\": [{\n      \"score\": 0.50368,\n      \"tag\": \"科技\"\n    }]\n  }\n}","keyword":"{\n  \"log_id\": 4723145430704877475,\n  \"items\": [\n    {\n      \"score\": 0.924929,\n      \"tag\": \"alibaba\"\n    },\n    {\n      \"score\": 0.845841,\n      \"tag\": \"应用架构\"\n    },\n    {\n      \"score\": 0.836735,\n      \"tag\": \"spring框架\"\n    },\n    {\n      \"score\": 0.816803,\n      \"tag\": \"沙箱\"\n    },\n    {\n      \"score\": 0.808436,\n      \"tag\": \"架构\"\n    }\n  ]\n}","summary":"{\"last\":\"开发者可以只是用这部分实现运行在任何云平台中\",\"first\":\"Spring Cloud Alibaba 如何帮助开发者实现微服务\"}","phrase":"{\"last\":\"帮助开发者\",\"first\":\"微服务\"}"}
        // this.name=res.name;
        // this.title=JSON.parse(res.summary);
        // this.listmsg=JSON.parse(res.keyword).items;
        // this.imphrase=JSON.parse(res.phrase);
        // this.topic1=JSON.parse(res.topic).item.lv1_tag_list[0].tag;
        // this.topic2=JSON.parse(res.topic).item.lv2_tag_list[0].tag;


        axios.get('http://localhost:8080/spider/detail',{params:{name:this.name}}
                ).then(res=>{   
                    res=res.data;
                    this.name=res.name;
                    
                    this.title=JSON.parse(res.summary);
                    this.listmsg=JSON.parse(res.keyword).items;
                    this.imphrase=JSON.parse(res.phrase);
                    this.topic1=JSON.parse(res.topic).item.lv1_tag_list[0].tag;
                    

                   
                    
                }).catch(error=>{
                    alert('报错'+error)
                })
    },
    methods:{

    },

}
</script>
