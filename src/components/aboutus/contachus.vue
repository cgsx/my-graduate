<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>联系我们</h1>
    </div>
    <div class="contachCard">
     <p><span class="fb">商务咨询：邮箱：</span>767086748@qq.com <span class="kongge"></span><span class="fb">电话：</span>18744558877</p>
     <p><span class="fb">市场合作：邮箱：</span>767086748@qq.com <span class="kongge"></span><span class="fb">电话：</span>18744558877</p>
     <p><span class="fb">人才招聘：邮箱：</span>767086748@qq.com <span class="kongge"></span><span class="fb">电话：</span>18744558877</p>
    </div>
  </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {

      }
    }
  }
</script>
<style >
  .contachCard>p{
    line-height: 100px;
  }
  .fb{
    font-weight: bold;
    font-size: 16px;
  }
  .kongge{
    display: inline-block;
    width: 500px;
  }
  .contachCard{
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
