<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>{{solutionList.name}}</h1>
      <p>{{solutionList.description}}</p>
      <p><Button type="error" size="large">立即咨询</Button></p>
    </div>
    <div class="solutionModule" v-for="item in solutionList.funlist">
      <p class="BjTitle">
        {{item.title}}
      </p>
      <p class="BjContent">
        {{item.detail}}
         </p>
    </div>
    <div class="solutionModule" v-for="item in solutionList.deslist">
      <p class="BjTitle">
        {{item.title}}
      </p>
      <p class="GsContent">
<span class="GsNer">
{{item.detail}}
</span>
        <span class="GsImg">

      <img src="../../assets/images/fc176b01-4809-4dba-b85a-0c9b1033f223.png" /></span>
      </p>
    </div>
    <div class="solutionModule">
      <p class="BjTitle">应用场景</p>
      <Tabs value="name1">
        <TabPane :label="item.detailtitle" :name="item.uuid"  v-for="item in solutionList.applist">
          {{item.detail}}
        </TabPane>
      </Tabs>
    </div>
    <div class="solutionModule clearfix">
      <p class="BjTitle">方案优势</p>
      <div class="yS clearfix"  v-for="item in solutionList.advenlist">
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
  </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
        uuid:'',
        solutionList:[]
      }
    },
    mounted(){
      this.uuid=this.$route.query.uuid;
      this.loadSolutions();
    },  updated(){
      this.uuid=this.$route.query.uuid;
      console.log(this.uuid);
    },
    methods:{
        loadSolutions(){
          var self=this;
          self.$http.post("mg_solution/detail.php",{uuid:self.uuid}).then((m)=>{
            if(m.data.code!='100'){
              self.$Message.info(m.data.msg);
              return false;
            }
            self.solutionList=m.data.data;
          })
        }
    }
  }
</script>
<style scoped>
  .solutionModule .yS{
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
  .solutionModule .yS div{
    float: left;
  }
.GsImg{
  display: inline-block;
  width: 200px;
  height: 100px;
}
.GsImg img{
  width: 100%;
  height: 100%;
}
.GsNer{
  display: inline-block;
  width: 70%;
  margin-right: 100px;
}
  .solutionModule{
    padding: 100px 100px 50px 100px;
text-align: center;
  }
  .BjTitle{
    font-size: 36px;
    color: #000000;
    padding-bottom: 30px;
  }
  .GsContent{
    text-align: left;
    width: 100%;
    height: 200px;
    border: 1px solid #0C172B;
    padding: 30px;
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
