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
   <Menu mode="horizontal" :theme="theme1" active-name="1">
     <MenuItem name="1">
       全部
     </MenuItem>
     <MenuItem name="2">
       公共事务
     </MenuItem>
       <MenuItem name="3">
       媒体报业
     </MenuItem>

     <MenuItem name="4">
       金融
     </MenuItem>
     <MenuItem name="5">
       制造
     </MenuItem>
     <MenuItem name="6">
       零售快消
     </MenuItem>
     <MenuItem name="7">
       其他
     </MenuItem>
   </Menu>
 </div>
    <div class="exampleDetail clearfix">
      <div class="exampleOne " >
        <span class="circle clearfix">
        <img src="../../assets/images/6e43db13-3e6e-4096-ba82-f1e034b47be0.png" />
        </span>
        <div class="exampleNer clearfix">
               <p class="exampleNerTitle">
        某大型国有银行大数据营销案例
              </p>
          <p>
            随着互联网金融对传统银行业务的不断冲击，银行业变革需求迫切，做为互联网+金融的先锋，某大型国有银行早已布局了银行电商平台
          </p>
          <p class="btn">
            了解更多
          </p>
        </div>
      </div>
      <div class="exampleOne " >
        <span class="circle clearfix">
        <img src="../../assets/images/6e43db13-3e6e-4096-ba82-f1e034b47be0.png" />
        </span>
        <div class="exampleNer clearfix">
               <p class="exampleNerTitle">
        某大型国有银行大数据营销案例
              </p>
          <p>
            随着互联网金融对传统银行业务的不断冲击，银行业变革需求迫切，做为互联网+金融的先锋，某大型国有银行早已布局了银行电商平台
          </p>
          <p class="btn">
            了解更多
          </p>
        </div>
      </div>
      <div class="exampleOne " >
        <span class="circle clearfix">
        <img src="../../assets/images/6e43db13-3e6e-4096-ba82-f1e034b47be0.png" />
        </span>
        <div class="exampleNer clearfix">
               <p class="exampleNerTitle">
        某大型国有银行大数据营销案例
              </p>
          <p>
            随着互联网金融对传统银行业务的不断冲击，银行业变革需求迫切，做为互联网+金融的先锋，某大型国有银行早已布局了银行电商平台
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
        theme1: 'light'
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
