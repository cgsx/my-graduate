<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>公司动态</h1>

    </div>
    <div class="dongtai">
      <div class="companyDong" v-for="item in dataList">
        <img :src="$store.state.imgCommon+'/conmon/showImg.php?uuid='+item.uuid+'&type=11'" height="174" width="300" alt="">

        <div class="companyDongNer">
          <p class="NerTitle">{{item.title}}</p>
          <p >{{item.time}}</p>
          <p >{{item.description}}</p>
        </div>

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
        self.$http.post("mg_trends/mg_trends.php").then((m)=>{
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
<style >
  .NerTitle{
    font-size: 20px;
    font-weight: 400;
  }
  .companyDongNer{
    width: 100%;
    position: absolute;
    top: 30px;
    left: 30%;
  }
  .companyDongNer p{
    padding-bottom: 10px;
    width: 60%;
  }
  .companyDong{
    position: relative;
    padding: 10px;
background-color: #f5f5f5;
  }
  .dongtai{
    width: 1200px;
    margin: 20px auto;
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
