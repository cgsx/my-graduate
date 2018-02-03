<template>
<div class="title">
  <Menu mode="horizontal"  active-name="1" @on-select="jumpToPage">
    <div class="layout-logo"></div>
    <MenuItem name="index">
      首页
    </MenuItem>
    <MenuItem name="product" class="pro">
     产品
    </MenuItem>
    <MenuItem name="solution">
     解决方案
    </MenuItem>
    <MenuItem name="example">
     案例
    </MenuItem>
    <MenuItem name="datareport">
     数据报告
    </MenuItem>
    <MenuItem name="sendmsg">
   留言
    </MenuItem>
    <MenuItem name="aboutus">
     关于我们
    </MenuItem>
    <MenuItem name="login" class="login">
  登录
    </MenuItem>
    <MenuItem name="9" class="search">
<i class="iconfont icon-icon_search"></i>
    </MenuItem>
  </Menu>
  <div class="showProDetail">

  </div>
</div>
</template>
<script>
  export default {
      name:'headers',
    data(){
          return {

          }
    },
    methods:{
//        跳转页面
      jumpToPage(route){
          var self=this;
          self.$router.push({name:route})
      }
    }
  }
</script>
<style >
.title{
  width: 100%;
  height: 80px;
  position: absolute;
  color: red;
}
.login{
  margin-left: 20%;
  border-right: 1px solid white;
  border-left: 1px solid white;
}
.pro{

}
.showProDetail{
  width: 100%;
}
.login a{
  color: white;
}
.login a:hover{
  color: #E02D39;
}
.search{
  border-right: 1px solid white;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  margin-right: 100px;
  position: relative;
  top: 15px;
  left: 20px;
}
  .title .ivu-menu-light{
    background: none;
  }
.title .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
  color:white;
  border-bottom: 0;
  transition: all .5s linear;
}
.title .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
  color: #E02D39;
  border-bottom: 2px solid #E02D39;
}
</style>
