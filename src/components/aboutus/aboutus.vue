<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>关于我们</h1>

    </div>
    <Row class="company">
      <Col span="20" offset="2">
      <h2 class="companyTitle">企业介绍</h2>
<p v-for="item in dataList.deslist">
  {{item.ner}}
</p>
      </Col>
    </Row>
    <Row class="company">
      <Col span="20" offset="2">
      <h2 class="companyTitle">全球布局</h2>
<p v-for="item in dataList.advenlist">{{item.ner}}</p>
      <p>
        <img src="../../assets/images/9a8f753a-e07d-4ee3-bf86-16da1ae53229.png" />
      </p>
      </Col>
    </Row>
     <Row class="company">
      <Col span="20" offset="2">

      <h2 class="companyTitle">企业荣誉</h2>
       <p v-for="item in dataList.funlist">{{item.ner}} <img src="../../assets/images/6ea869f0-5fbe-48b6-b72b-e4c88ec176ed.png" height="500" width="1200"/></p>
       <p></p>
      </Col>
    </Row>
    </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
        dataList:[]
      }
    },mounted(){
      this.loadList();
    },methods:{
      loadList(){
        var self=this;
        self.$http.post("mg_company/mg_company.php").then((m)=>{
          if(m.data.code!='100'){
            self.$Message.info(m.data.msg);
            return false;
          }
          self.dataList=m.data.data;
          console.log(self.dataList)
        })
      }
    }
  }
</script>
<style >

  .company{
    padding: 20px;
  }
  .company:nth-of-type(even){
    background-color: #f5f5f5;
  }
  .company  .companyTitle{
    line-height: 70px;
    text-align: center;
  }
  .company p{
    padding: 20px 0;
  }
  .company p img{
    width: 100%;
    height: 100%;
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
