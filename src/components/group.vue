<template>
    <div class="container">
        <page-com v-bind:childmessage='groupMsg'></page-com>
        <aside  class="col">
                <ul class="nav nav-pills nav-stacked">
                    <li role="presentation" v-for="(item,index) in groupClass" :key="item"  :class="{'active':activeSort==index}" @click="activeClass(index)"><a href="javascript:;">{{item}}</a></li>
                    
                </ul>
        </aside>
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
import pageCom from "./page"

export default ({
    name: 'index',
     data(){
    return{
        activeSort:0,
        groupClass:["arch","avi","db","engineering","fund","game","iot","java","mobile","ops","other","python","sec","web"],
        groupMsg:'arch',     
    }
  },
  methods:{
      activeClass(index){
          this.activeSort=index;
          this.groupMsg=this.groupClass[index];
      },
     
  },
  components:{
      pageCom,
  }
})
</script>
