<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>加入我们</h1>

    </div>
    <div class="joinCard">
      <h3 class="joinTitle">以人为本，注重人才培养</h3>
      <div class="joinNer">
        <p class="joinNerText">我们倡导开放、进取、大爱的企业文化，秉承尊重技术、尊重知识、尊重
          人才的用人理念。我们渴望新鲜血液的加入，为公司带来源源不断的活力。同时，我们注重新员工的
          培养和成长，一对一专业指导、双通道职业发展体系、全方位培养计划、广阔的职业上
          升空间……让每一位新员工在百分点的开放舞台上发现自我、超越自我、施展才华，实现与企业的共同成长。</p>
        <p class="joinImg">

          <img src="../../assets/images/img1.png" /></p>
      </div>
    </div>
    <div class="joinCard">
      <h3 class="joinTitle">工作在百分点</h3>
<p class="workText">这里有酷炫的大数据展厅、畅所欲言的工作氛围、创新进取的黑客精神、薪火相传的培训文化；在这里，你能感受到家人般的关怀，你有机会与国内、国际顶尖专家学者面对面交流，你能与一群志同道合的伙伴并肩作战，一起创造新的未来。 </p>
      <Carousel v-model="value1" loop>
        <CarouselItem>
          <div class="demo-carousel"><img src="../../assets/images/20160812150653_13226.jpg"/></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel"><img src="../../assets/images/20160812150653_13226.jpg"/></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel"><img src="../../assets/images/20160812150653_13226.jpg"/></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel"><img src="../../assets/images/20160812150653_13226.jpg"/></div>
        </CarouselItem>      <CarouselItem>
          <div class="demo-carousel"><img src="../../assets/images/20160812150653_13226.jpg"/></div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="joinCard">
      <h3 class="joinTitle">我们在寻找</h3>
      <p class="workText">
        我们需要这样的你：协作融合、积极进取、勇于承担责任、持续成长，能够与快速发展的百分点同步前行，不断成长和创新。 百分点的舞台将给每位伙伴提供合适的角色和公平、开放的演出机会，我们期望您可以成为百分点的主角之一。
      </p>
      <p>
        <Button type="primary" class="joinBTn">立即加入</Button>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
        value1:0
      }
    }
  }
</script>
<style >
  .joinBTn{
    width: 20%;
    margin-left: 40%;

    height: 50px;
  }
  .demo-carousel{
    width: 100%;
    height: 300px;
    background-color: green;
  }
  .demo-carousel img{
    width: 100%;
    height: 100%;
  }
  .workText{
    padding-top: 20px;
    padding-bottom: 30px;
  }
  .joinNerText{
    width: 80%;
  }
  .joinImg{
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  .joinImg img{
    height: 100%;
  }

  .joinNer{
    position: relative;
    width: 100%;
    border: 1px solid #0C172B;
    border-left: 4px solid #d33936;
margin-top: 20px;
    padding: 50px;
  }
  .joinTitle{
    text-align: center;
  }
  .joinCard{
    width: 1200px;
    margin: 50px auto;
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
