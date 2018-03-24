<template>
  <div class="productTitle">
    <img src="../../assets/images/30eab463-057f-4972-84f3-20ec27ab1eaf.png"/>
    <div class="titleText">
      <h1>数据报告</h1>
    </div>
    <div class="dataReport clearfix">
        <div class="card" v-for="item in dataList">
          <img src="../../assets/images/dfd11d46-eab2-49c2-bac0-0a69d94d0494.png" />
          <p class="cardTitle">{{item.name}}</p>
          <p>{{item.description}}</p>
        </div>

    </div>
    </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
      dataList:[],//数据报告列表
      }
    },mounted(){
        this.loadList();
    },methods:{
      loadList(){
          var self=this;
        self.$http.post("mg_data/mg_data.php").then((m)=>{
          if(m.data.code!='100'){
            self.$Message.info(m.data.msg);
            return false;
          }
          self.dataList=m.data.data;
        })
      }
    }
  }
</script>
<style scoped>
  .card{
    width: 23%;
    text-align: center;
    float: left;
  }
  .card:hover{
    box-shadow: 0px 0 5px 2px #aaa;

  }
  .cardTitle{
    font-size: 20px;
    color: #000000;
  }
  .card p{
    padding: 10px;
  }
  .card img{
    margin-top: 10px;
    width: 80%;
    height: auto;
  }
  .dataReport{
    padding: 50px;
  }
  .productTitle{
    position: relative;
  }
  .productTitle>img{
    width: 100%;
  }
  .titleText{
    width: 100%;
    position: absolute;
    text-align: center;
    top: 100px;
    color: white;
    padding: 15px 0;
    background: rgba(0,0,0,.6);
  }
  .titleText h1{
    font-size: 36px;
  }
  .titleText p{
    margin-top: 20px;
  }
</style>
