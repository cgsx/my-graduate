<template>
<div class="footer">
<ul class="cl">
  <li><router-link to="/index">首页</router-link></li>
  <li><router-link to="/index">产品</router-link></li>
  <li><router-link to="/index">解决方案</router-link></li>
  <li><router-link to="/index">案例</router-link></li>
  <li><router-link to="/index">数据报告</router-link></li>
  <li><router-link to="/index">留言</router-link></li>
  <li><router-link to="/index">关于我们</router-link></li>
  <li>sangefenxiang</li>
</ul>
  <p class="cl beian">
    <span class="fl">
          ©2018 Baifendian Corporation All Rights Reserved.
    <br>
    京ICP备09109727号 京公网安备11010802010283号
    </span>
<span class="text-right fr address">
      400-6240-800
  <br>
    北京市朝阳区北辰西路8号院2号楼北辰世纪中心A座16层
</span>

  </p>
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
.footer{
  width: 100%;
  height: 200px;
  background-color: #121116;
}
.footer ul{
  margin-left: 100px;
}
  .footer ul li:not(:last-child){
    float: left;
line-height: 100px;
    padding: 0 20px;
    font-size: 16px;
  }
.footer ul li:last-child{
    float: right;
line-height: 100px;
    padding: 0 20px;
  margin-right: 100px;
    font-size: 16px;
  }
  .beian{
    margin-left: 100px;
    font-size: 16px;

  }
  .address{
    margin-right: 100px;
  }
</style>
