<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>加入我们</h1>

    </div>
    <div class="joinCard">
      <h3 class="joinTitle">{{data1.title}}</h3>
      <div class="joinNer">
        <p class="joinNerText">{{data1.content}}</p>
        <p class="joinImg">

          <img src="../../assets/images/img1.png" /></p>
      </div>
    </div>
    <div class="joinCard">
      <h3 class="joinTitle">{{data2.title}}</h3>
<p class="workText">{{data2.content}} </p>

    </div>
    <div class="joinCard">
      <h3 class="joinTitle">{{data3.title}}</h3>
      <p class="workText">
        {{data3.content}}
      </p>

      <p>
        <Button type="primary" class="joinBTn">立即加入</Button>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
          value1:0,
        dataList:[],//数据报告列表
        data1:[],
        data2:[],
        data3:[],
      }
    },mounted(){
      this.loadList();
    },methods:{
      loadList(){
        var self=this;
        self.$http.post("mg_join/mg_join.php").then((m)=>{
          if(m.data.code!='100'){
            self.$Message.info(m.data.msg);
            return false;
          }
          self.dataList=m.data.data;
          self.data1=self.dataList[0];
          self.data2=self.dataList[1];
          self.data3=self.dataList[2];
        })
      }
    }
  }
</script>
<style >
  .joinBTn{
    width: 20%;
    margin-left: 40%;

    height: 50px;
  }
  .demo-carousel{
    width: 100%;
    height: 300px;
    background-color: green;
  }
  .demo-carousel img{
    width: 100%;
    height: 100%;
  }
  .workText{
    padding-top: 20px;
    padding-bottom: 30px;
  }
  .joinNerText{
    width: 80%;
  }
  .joinImg{
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  .joinImg img{
    height: 100%;
  }

  .joinNer{
    position: relative;
    width: 100%;
    border: 1px solid #0C172B;
    border-left: 4px solid #d33936;
margin-top: 20px;
    padding: 50px;
  }
  .joinTitle{
    text-align: center;
  }
  .joinCard{
    width: 1200px;
    margin: 50px auto;
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
