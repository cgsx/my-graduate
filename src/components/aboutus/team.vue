<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>管理团队</h1>

    </div>
    <div class="guan clearfix" >
        <div class="person cursor" @click="openDetail(item)" v-for="item in dataList" :key="item.uuid">
          <p class="personImg">
            <img src="../../assets/images/guan1.png" />
          </p>
          <p>{{item.name}}</p>
          <p>{{item.dept}}</p>
        </div>
    </div>
    <Modal v-model="modal3">
      <p slot="header"></p>
      <p class="personDetail">
         <img src="../../assets/images/guan1.png" />
      </p>
      <p slot="footer">
        <h3>{{detail.back}}</h3>
        <p> {{detail.backdetail}}</p>
        <h3>     {{detail.workhis}}</h3>
        <p v-for="item in detail.workhisList">   {{item.des}}</p>

      </p>
    </Modal>
  </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
        dataList:[],
        detail:{},
        modal3:false
      }
    },mounted(){
      this.loadList();
    },methods:{
      loadList(){
        var self=this;
        self.$http.post("mg_manner/mg_manner.php").then((m)=>{
          if(m.data.code!='100'){
            self.$Message.info(m.data.msg);
            return false;
          }
          self.dataList=m.data.data;
          console.log(self.dataList)
        })
      },
      openDetail(item){
          var self=this;
          console.log(item);
          self.detail=item;
          self.modal3=true;
      }
    }
  }
</script>
<style scoped>
  .personDetail img{
    width: 100%;
  }
  .personImg:hover{
    box-shadow: 0px 0px 15px 2px #777;

  }
  .guan{
    width: 1200px;
    margin: 20px auto;
  }
  .guan .person{
    width: 220px;

  }  .guan .person p img{
    width: 100%;
         height: 100%;

  }
  .guan .person p{
    color: #0C172B;
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
