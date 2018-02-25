<template>
  <div class="productTitle">
      <img src="../../assets/images/product.png"/>
      <div class="titleText">
    <h1>智能政府决策系统</h1>
    <p>基于复杂决策模型，进行态势感知、预测分析、仿真模拟等，实现对决策业务事前判断、事中控制、事后反馈的全局智能支持。</p>
    <p><Button type="error" size="large">立即咨询</Button></p>
  </div>
    <div class="productMudele">
      <p class="top">产品概述</p>
      <p>百分点智能政府决策系统（DeepGovernor），是一套基于复杂决策模型，进行态势感知、预测分析、仿真模拟和对策分析，从而实现对决策业务进行事前判断、事中控制、事后反馈的全局智能支持系统。该系统汇聚跨领域政务数据，通过大数据和人工智能技术，挖掘数据中蕴含的深度关联，通过一系列决策模型进行综合及专题决策，并对决策效果进行实时模拟和优化，从而提升政府决策效率，降低决策风险，增强政府治理水平。</p>
    </div>
    <div class="productMudele clearfix">
      <p class="top">产品功能</p>
    <div class="Gn">
        <p>
          <img src="../../assets/images/4cdd6021-4e85-4451-9327-a33c421566f2.png" />
        </p>
      <p class="GnTitle">
        数据聚合与共享
      </p>
      <p class="GnContent">
        汇聚政府各部门的政务信息资源，形成政务领域的权威数据库，通过大数据平台的处理能力对各类结构化和非结构数据进行整合、加工、汇总，为相关部门的数据分析提供数据支持。提供政府各部门各系统间文件、数据库及API等数据交换服务功能。提供跨部门数据共享、分布式计算、分布式存储服务，实现数据一站式统一管理。
      </p>
    </div>
    </div>
    <div class="productMudele clearfix">
      <p class="top">产品优势</p>
      <div class="yS clearfix">
        <div>
          <img src="../../assets/images/3cee0044-4d39-4c11-ae1e-e7ac83cf7140.png" />
        </div>
        <div class="ysRight">
          <p class="YsTitle">
            高效的大数据处理
          </p>
          <p class="YsContent">
            以百分点自主开发的大数据操作系统BD-OS为基础，可对海量复杂数据进行实时处理与整合交换，创建一站式数据门户和数据仓库，可进行多维度数据应用情况统计，实时监控数据流向，实现数据互动可视化分析。
          </p>
        </div>
      </div>
    </div>
    <div class="productMudele ">
      <p class="top">应用场景</p>
      <Tabs value="name1">
        <TabPane label="人口预测" name="name1">政府部门可以通过系统内置的分要素和多状态人口预测模型，基于时间跨度、状态划分、区域范围等维度进行参数配置，输出人口预测结果，在制定人口、教育、医疗、就业等政策时，提供预测数据支持。通过系统还可预估不同政策方案对人口增长和人口数量的影响。根据不同方案中运行模型得到的预测结果，与政策期望达到的目标进行对比验证，辅助政府部门进行政策方案的制定和调整。</TabPane>
        <TabPane label="传染病风险预测" name="name2">政府部门可以通过系统内置的分要素和多状态人口预测模型，基于时间跨度、状态划分、区域范围等维度进行参数配置，输出人口预测结果，在制定人口、教育、医疗、就业等政策时，提供预测数据支持。通过系统还可预估不同政策方案对人口增长和人口数量的影响。根据不同方案中运行模型得到的预测结果，与政策期望达到的目标进行对比验证，辅助政府部门进行政策方案的制定和调整。</TabPane>
        <TabPane label="教育资源供需分析" name="name3">政府部门可以通过系统内置的分要素和多状态人口预测模型，基于时间跨度、状态划分、区域范围等维度进行参数配置，输出人口预测结果，在制定人口、教育、医疗、就业等政策时，提供预测数据支持。通过系统还可预估不同政策方案对人口增长和人口数量的影响。根据不同方案中运行模型得到的预测结果，与政策期望达到的目标进行对比验证，辅助政府部门进行政策方案的制定和调整。</TabPane>
        <TabPane label="税源结构分析" name="name4">基于企业法人库、宏观经济数据库、税务部门自有数据库、纳税人行为数据等数据源，系统可以对企业数据、纳税人数据、税收数据进行宏观统计分析，预测税收数量及增长率。系统还可以对税源结构进行对比分析，挖掘潜在税源增长点，并能对有可能的税源流失下降风险进行预测和原因分析。</TabPane>
      </Tabs>
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
  .productMudele .yS{
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
  .productMudele .yS div{
    float: left;
  }
 .productMudele .Gn{
    width: 48%;
   margin-right: 10px;
   margin-bottom: 10px;
    height: 350px;
    background: #fffdef;
   float:left;
  }
 .productMudele .Gn img{
   margin: 50px auto;

 }
 .productMudele .Gn p{
   text-align: center;
 }
 .productMudele .Gn .GnTitle{
   font-size: 20px;
   color: #000000;
   padding-bottom: 20px;
 }
 .GnContent{
   padding: 0 5px;
 }
 .productTitle{
    position: relative;
  }
  .productTitle>img{
    width: 100%;
  }
  .productMudele{
    padding: 100px 100px;
  }
  .productMudele .top{
     font-size: 24px;
padding-bottom: 50px;
    color: #000000;
    text-align: center;
  }
  .productMudele:nth-of-type(odd){
    background: #f0f0f0;
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
