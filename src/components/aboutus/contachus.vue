<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>联系我们</h1>
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
