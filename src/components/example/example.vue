<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>案例</h1>
      <p>
        乐彩云已服务超过10万家企业客户，涵盖金融、制造、公共事务、媒体出版、能源、交通、零售、电商等行业。
      </p>
    </div>
 <div class="exampleNav">
   <Menu mode="horizontal" :theme="theme1" active-name="公共事务" @on-select="choseActive">

     <MenuItem :name="JSON.stringify(item)" v-for="(item,key) in examList" :key="key">
       {{key}}
     </MenuItem>

   </Menu>
 </div>
    <div class="exampleDetail clearfix">
      <div class="exampleOne " v-for="item in exampleList" >
        <span class="circle clearfix">
        <img src="../../assets/images/6e43db13-3e6e-4096-ba82-f1e034b47be0.png" />
        </span>
        <div class="exampleNer clearfix">
               <p class="exampleNerTitle">
        {{item.name}}
              </p>
          <p>
            {{            item.description}}
          </p>
          <p class="btn">
            了解更多
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
        theme1: 'light',
        examList:{},//案例列表
        exampleList:[]//exampleLIst
      }
    },mounted(){
        this.loadDefauult();
    },methods:{
      choseActive(name){
          var self=this;
          var names=JSON.parse(name);
          self.exampleList=names;

      },
      loadDefauult(){
          var self=this;
        self.$http.post("mg_exam/examlist.php").then((m)=>{
          if(m.data.code!='100'){
            self.$Message.info(m.data.msg);
            return false;
          }
          self.examList=m.data.data;
          self.exampleList=self.examList.公共事务;

        })
      }
    }
  }
</script>
<style>
  .exampleNerTitle{
    font-size: 20px;color: #000000;
  }
  .btn{
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #000000;
    margin-top: 50px;
    cursor: pointer;
  }
  .btn:hover{
    color: red;
    border: 1px solid red;

  }
  .circle{
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px 0 0 10px;
  }
  .exampleNer{
    width: 50%;
    /*height: 100px;*/
    float: right;
margin: 10px 100px  10px 10px;
  }
  .circle img{
    width: 100%;
    height: 100%;
    border-radius: 50%;

  }
  .exampleOne{
    float: left;
    width: 48%;
    height: auto;
    padding: 20px;
  }
  .exampleDetail{
    padding: 50px;
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
  .productTitle{
    position: relative;
  }
  .productTitle>img{
    width: 100%;
  }
  .exampleNav{
margin-top: 100px;

  }
  .exampleNav .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .exampleNav .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
    color:#000000;
    border-bottom: 0;
    transition: all .5s linear;
    font-size: 20px;
  }
  .exampleNav .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .exampleNav .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
    color: #E02D39;
    border-bottom: 2px solid #E02D39;
  }
</style>
