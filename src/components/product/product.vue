<template>
  <div>
  <div class="productTitle" >
      <img src="../../assets/images/product.png"/>
      <div class="titleText">
    <h1>{{proList.name}}</h1>
    <p>{{proList.description}}</p>
    <p><Button type="error" size="large">立即咨询</Button></p>
  </div>
    <div class="productMudele" v-for="item in proList.deslist">
      <p class="top">{{item.title}}</p>
      <p>
      {{item.detail}}
      </p>
    </div>
    <div class="productMudele clearfix">
      <p class="top">产品功能</p>
    <div class="Gn" v-for="item in proList.funlist">
        <p>
          <img src="../../assets/images/4cdd6021-4e85-4451-9327-a33c421566f2.png" />
        </p>
      <p class="GnTitle">
        {{item.detailtitle}}
      </p>
      <p class="GnContent">
        {{item.detail}}
      </p>
    </div>
    </div>
    <div class="productMudele clearfix">
      <p class="top">产品优势</p>
      <div class="yS clearfix" v-for="item in proList.advenlist">
        <div>
          <img src="../../assets/images/3cee0044-4d39-4c11-ae1e-e7ac83cf7140.png" />
        </div>
        <div class="ysRight">
          <p class="YsTitle">
            {{item.detailtitle}}
          </p>
          <p class="YsContent">
            {{item.detail}}
          </p>
        </div>
      </div>
    </div>
    <div class="productMudele ">
      <p class="top">应用场景</p>
      <Tabs value="name1">
        <TabPane :label="item.detailtitle" :name="item.uuid"  v-for="item in proList.applist">
          {{item.detail}}
        </TabPane>
      </Tabs>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
        uuid:'',
        proList:''
      }
    },
    mounted(){
      this.uuid=this.$route.query.uuid;
        this.loadProList();
    },
   updated(){
        this.uuid=this.$route.query.uuid;
        console.log(this.uuid);
   },
    watch:{
    uuid:function () {
    console.log(this.uuid);
  }
    },
    methods:{
        loadProList(){
          var self=this;
          self.$http.post("/mg_pro/prodetail.php",{uuid:self.uuid}).then((m)=>{
            if(m.data.code!='100'){
              self.$Message.info(m.data.msg);
              return false;
            }
            self.proList=m.data.data;
          })
        }
    }
  }
</script>
<style scoped>
  .productMudele .yS{
    margin-right: 10px;
    width: 48%;
    margin-bottom: 10px;
    float:left;
  }
  .YsTitle{
    font-size: 20px;
    color: #000000;
    padding-bottom: 30px;
  }
  .ysRight{
    width: 80%;
padding-left: 50px;
  }
  .productMudele .yS div{
    float: left;
  }
 .productMudele .Gn{
    width: 48%;
   margin-right: 10px;
   margin-bottom: 10px;
    height: 350px;
    background: #fffdef;
   float:left;
  }
 .productMudele .Gn img{
   margin: 50px auto;

 }
 .productMudele .Gn p{
   text-align: center;
 }
 .productMudele .Gn .GnTitle{
   font-size: 20px;
   color: #000000;
   padding-bottom: 20px;
 }
 .GnContent{
   padding: 0 5px;
 }
 .productTitle{
    position: relative;
  }
  .productTitle>img{
    width: 100%;
  }
  .productMudele{
    padding: 100px 100px;
  }
  .productMudele .top{
     font-size: 24px;
padding-bottom: 50px;
    color: #000000;
    text-align: center;
  }
  .productMudele:nth-of-type(odd){
    background: #f0f0f0;
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
