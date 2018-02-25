<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>银行解决方案</h1>
      <p>为银行提供从基础设施建设到上层智能应用的全套解决方案，助力银行的差异化服务和个性化产品、产品创新、营销策略执行与全流程监控等业务。</p>
      <p><Button type="error" size="large">立即咨询</Button></p>
    </div>
    <div class="solutionModule">
      <p class="BjTitle">
        方案背景
      </p>
      <p class="BjContent">
        大数据时代银行面临着巨大的商业挑战：多方的竞争压力，市场业绩不佳，财务压力不断攀升，客户关系维护难度加深等。在互联网交易链条中，多种移动支付方式以及互联网金融正在不断冲击着银行的业务，这使得银行逐渐被边缘化和管道化。

        面对多种商业挑战，借助大数据技术整合多方数据，银行可以通过深入洞察客户和市场，对客户制定个性化的挖、抢、保、拓策略，从而提升银行营销和风控效率，降低运营成本，并且更好的提升客户体验。
      </p>
    </div>
    <div class="solutionModule">
      <p class="BjTitle">
        方案概述
      </p>
      <p class="GsContent">
<span class="GsNer">        百分点基于八年来的大数据领域的理论研究和应用实践，为银行业客户提供端到端的整体解决方案，帮助银行实现海量多源异构数据的采集、整合，并运用大数据分析和数据挖掘技术，深入挖掘客户特征与需求。从而为银行的差异化服务和个性化产品、产品创新、营销策略执行与全流程监控等提供数据支撑。
</span>
        <span class="GsImg">

      <img src="../../assets/images/fc176b01-4809-4dba-b85a-0c9b1033f223.png" /></span>
      </p>
    </div>
    <div class="solutionModule">
      <p class="BjTitle">应用场景</p>
      <Tabs value="name1">
        <TabPane label="精准营销" name="name1">政府部门可以通过系统内置的分要素和多状态人口预测模型，基于时间跨度、状态划分、区域范围等维度进行参数配置，输出人口预测结果，在制定人口、教育、医疗、就业等政策时，提供预测数据支持。通过系统还可预估不同政策方案对人口增长和人口数量的影响。根据不同方案中运行模型得到的预测结果，与政策期望达到的目标进行对比验证，辅助政府部门进行政策方案的制定和调整。</TabPane>
        <TabPane label="智慧运营" name="name2">政府部门可以通过系统内置的分要素和多状态人口预测模型，基于时间跨度、状态划分、区域范围等维度进行参数配置，输出人口预测结果，在制定人口、教育、医疗、就业等政策时，提供预测数据支持。通过系统还可预估不同政策方案对人口增长和人口数量的影响。根据不同方案中运行模型得到的预测结果，与政策期望达到的目标进行对比验证，辅助政府部门进行政策方案的制定和调整。</TabPane>
        <TabPane label="产品设计" name="name3">政府部门可以通过系统内置的分要素和多状态人口预测模型，基于时间跨度、状态划分、区域范围等维度进行参数配置，输出人口预测结果，在制定人口、教育、医疗、就业等政策时，提供预测数据支持。通过系统还可预估不同政策方案对人口增长和人口数量的影响。根据不同方案中运行模型得到的预测结果，与政策期望达到的目标进行对比验证，辅助政府部门进行政策方案的制定和调整。</TabPane>
        <TabPane label="决策支持" name="name4">基于企业法人库、宏观经济数据库、税务部门自有数据库、纳税人行为数据等数据源，系统可以对企业数据、纳税人数据、税收数据进行宏观统计分析，预测税收数量及增长率。系统还可以对税源结构进行对比分析，挖掘潜在税源增长点，并能对有可能的税源流失下降风险进行预测和原因分析。</TabPane>
      </Tabs>
    </div>
    <div class="solutionModule clearfix">
      <p class="BjTitle">方案优势</p>
      <div class="yS clearfix">
        <div>
          <img src="../../assets/images/3cee0044-4d39-4c11-ae1e-e7ac83cf7140.png" />
        </div>
        <div class="ysRight">
          <p class="YsTitle">
            成熟的数据资产管理体系
          </p>
          <p class="YsContent">
            百分点自主研发的大数据资产管理平台是一套分布式的多工种协同作业的，管理大数据采集、加工和应用环境所有资源和任务的大数据操作系统，为银行构建新一代数据仓库，帮助银行管理数据资产并创造商业价值。大数据资产管理平台拥有基于分布式数据库的操作便捷性、数据生命周期管理的安全性、以及数据处理的稳定性和快捷性等特点。
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
