<template>
    <div  class="col wrap">
		        <div class="main-wrap" > 
                    <div>
                        <div class="section" v-for="(item,index) in pageData" :key="index">
                            <article><p>{{item.name}}</p><span>{{item.url}}</span></article>
                            <button type="button" @click="find($event)" class="btn ">MORE</button>
                        </div>
                    </div>
                    <ul class="pagination">
                        <li>
                            <span aria-label="Previous" aria-hidden="true" @click="lastpage">&laquo;</span>
                        </li>
                        <li v-for="(item,index) in page" :key="index" :class="{'active':activepage==index}" @click="activePage(index)" ><span>{{item}}</span></li>
                        <li>  
                            <span aria-label="Next" aria-hidden="true" @click="nextpage" >&raquo;</span>
                        </li>
                    </ul>
                  
                </div>
                
	</div>
</template>
<style scoped>
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
<script>
import axios from 'axios';

export default ({
    name:'group',
    props:['childmessage'],
    data(){
    return{
        page:[1,2,3,4,5],
        activepage:0,
        groupMsg:'',
        pageData:[{'name':1,'url':11},{'name':2,"url":22}],
    }},
    created(){
        this.groupMsg=this.childmessage;
    },
    methods:{
        activePage(index){
          this.activepage=index;
          axios.get('http://localhost:8080/spider/index/',{params:{"type":this.groupMsg,"pnum":this.page[index]}}
                ).then(res=>{   
                   
                  
                   res=res.data;
                    this.pageData=res;
                    
                }).catch(error=>{
                    alert(error);
                })
      },
      find(e){
          const msg=e.currentTarget.previousElementSibling.firstElementChild.innerText;
          this.$router.push({
          path: '/detail',
          query: {
            title: msg
          }
        })
      },
      nextpage(){
          
          this.page.splice(0,5,...this.page.map((item)=>item+5));
          this.activepage=0;
      },
      lastpage(){
          if(this.page[0]==1) return;
          else {this.page.splice(0,5,...this.page.map((item)=>item-5));this.activepage=0;}

      }
    },
    watch:{
        'childmessage':function(){
            this.groupMsg=this.childmessage;
            this.activepage=0;
            this. activePage(0);
        }
    }
  
})
</script>
