<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>关于我们</h1>

    </div>
    <Row class="company">
      <Col span="20" offset="2">
      <h2 class="companyTitle">企业介绍</h2>
<p>
  乐彩云成立于2015年，是中国领先的企业级大数据+AI产品与整体解决方案提供商，
  拥有业内最完整的大数据及人工智能产品线。同时，乐彩云创建了中国最大的行业应用模型库及行业知识图谱库
  ，提供涵盖多个行业的人工智能场景解决方案，也是落地案例最多的智能场景行业解决方案提供商。
</p>
      <p>
        乐彩云现有员工600多人，包括2位国家千人计划入选者，和来自于国内外一流大学与技术公司的400多人的研发团队，首席科学家团队
        由多名国际顶尖的华人学者组成。乐彩云总部设在北京，在深圳、广州、沈阳、杭州、上海设有五家分公司共同拓展业务。
      </p>
      <p>
        作为国内领先的大数据智能场景解决方案提供商，乐彩云专注于大数据操作系统、智能认知产品以及智能决策应用
        场景的搭建，使企业能高效、便捷地进行数据资产管理和价值实现。目前，
        乐彩云业务已拓展至金融、制造、公共事务、媒体出版、能源、交通、零售、电商等多个行业，服务超10万家企业客户。
      </p>
      </Col>
    </Row>
    <Row class="company">
      <Col span="20" offset="2">
      <h2 class="companyTitle">全球布局</h2>
<p>乐彩云也是第一家海外国家级大数据与人工智能系统建设者。
  伴随着中国“一带一路”、“走出去”、“中国国家软实力输出”等多项国策的鼓励，乐彩云的
  业务探索已经延伸到了海外，为非洲、拉美以及更多国家和地区进行数据治国的技术和理念的输出。</p>
      <p>
        <img src="../../assets/images/9a8f753a-e07d-4ee3-bf86-16da1ae53229.png" />
      </p>
      </Col>
    </Row>
     <Row class="company">
      <Col span="20" offset="2">

      <h2 class="companyTitle">企业荣誉</h2>
<p>乐彩云凭借产品技术的创新及坚实的企业服务，在业界获得多项殊荣。乐彩云
  是唯一一家入选“2016 Gartner Cool Vendor”的大数据公司，被APAC CIO Outlook杂志评选为2017年亚太
  区大数据企业25强，荣获“2017德勤中国高科技高成长企业50强“，201
  6、2017连续两年荣获毕马威“中国FinTech50强”，2016年获评中国电子信息产业发展研究院“2016中国大数据企业50强”。</p>
       <p>

         <img src="../../assets/images/6ea869f0-5fbe-48b6-b72b-e4c88ec176ed.png" height="500" width="1200"/></p>
      </Col>
    </Row>
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

  .company{
    padding: 20px;
  }
  .company:nth-of-type(even){
    background-color: #f5f5f5;
  }
  .company  .companyTitle{
    line-height: 70px;
    text-align: center;
  }
  .company p{
    padding: 20px 0;
  }
  .company p img{
    width: 100%;
    height: 100%;
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
