<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>留言系统</h1>
      <p>
        请用户将宝贵的意见留言给我们，欢迎留言
      </p>
      <p><Button type="error" size="large">立即留言</Button></p>
    </div>
    <Row class="userMsg">
      <Col span="1" offset="2">
            <Avatar>USER</Avatar>
      </Col >
      <Col span="2">
      <h3 class="info">username</h3>
      <p>2017.1.1.1</p>
      </Col>
      <Col span="17">
      <h3 class="info">留言信息</h3>
<p>asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
      </Col>
    </Row>
    </div>
</template>
<script>
  export default {
    name:'sendmsg',
    data(){
      return {

      }
    }
  }
</script>
<style >
  .info{
    color: #79c2ff;
  }
.userMsg{
  margin: 20px;
  padding: 10px;
  border: 1px dashed #cccccc;
  color: #0C172B;
  border-radius: 10px;
}
  .productTitle{
    position: relative;
  }
  .productTitle>img{
    width: 100%;
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
