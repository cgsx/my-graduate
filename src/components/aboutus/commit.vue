<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>科学委员会</h1>

    </div>
    <div class="guan clearfix">
      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>      <div class="person cursor" @click="modal3=true">
        <p class="personImg">
          <img src="../../assets/images/guan1.png" />
        </p>
        <p>苏萌</p>
        <p>董事长兼CEO</p>
      </div>
    </div>
    <Modal v-model="modal3">
      <p slot="header"></p>
      <p class="personDetail">
        <img src="../../assets/images/guan1.png" />
      </p>
      <p slot="footer">
      <h3>教育背景：</h3>
      <p> 美国康奈尔大学 营销模型专业博士</p>
      <h3>      工作经历：</h3>
      <p>      国家“千人计划”专家、中关村创业领军人才；</p>
      <p>     北京大学国家发展研究院 特聘教授；</p>
      <p>      北京大学光华管理学院 研究教授；</p>
      <p>     多篇论文发表于国际顶尖学术期刊，国家自然科学基金重点项目获得者；</p>
      <p>          前北京大学光华管理学院副系主任、博士生导师；</p>
      <p>          2017 年世界互联网大会 “中国大数据领军人物”。</p>
      </p>
    </Modal>
  </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
        modal3:false,
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
    margin-right: 20px;
    float: left;

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
