<template>
<div class="title">
  <Menu mode="horizontal"  active-name="1" @on-select="jumpToPage" class="titleone">
    <div class="layout-logo">
      <img src="../../assets/images/logo.png" />
    </div>
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
    <Submenu name="about">
      <template slot="title">
        关于我们
      </template>
        <MenuItem name="aboutus">关于我们</MenuItem>
        <MenuItem name="team">管理团队</MenuItem>
        <MenuItem name="commit">科学委员会</MenuItem>
        <MenuItem name="dynamics">公司动态</MenuItem>
        <MenuItem name="joinus">加入我们</MenuItem>
        <MenuItem name="contachus">联系我们</MenuItem>
      </Submenu>
  </Menu>
  <div class="searchAndLogin">
      <span class="login" @click="login=true">
          登录
      </span>
    <span class="search ">
        <i class="iconfont icon-sousuo"></i>
      </span>
  </div>
  <Modal
    title="登录"
    v-model="login"
    :mask-closable="false"
  class="loginModal"
    width="300">
    <p class="inputMSg">
      <Input v-model="username">
      <span slot="prepend">用户名：</span>
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="pwd">
      <span slot="prepend">密码：</span>
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="msg">
      <span slot="prepend">验证码：</span>
      <span slot="append">验证码</span>
      </Input>
    </p>
    <p slot="footer">

    </p>
  </Modal>
  <Modal
    title="注册"
    v-model="register"
    :mask-closable="false"
  width="300">
    <p>Content of dialog</p>
    <p>Content of dialog</p>
    <p>Content of dialog</p>
  </Modal>
  <Modal
    title="重置密码"
    v-model="restpwd"
    :mask-closable="false"
    width="300">
    <p>Content of dialog</p>
    <p>Content of dialog</p>
    <p>Content of dialog</p>
  </Modal>
</div>
</template>
<script>
  export default {
      name:'headers',
    data(){
          return {
            login:false,
            register:false,
            restpwd:false,
            username:'',
            pwd:'',
            msg:''
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
  .inputMSg{
  height: 50px;
  }
  .searchAndLogin{
    position: absolute;
    top: 0;
    right: 100px;
    width: 300px;
    height: 60px;
    z-index: 901;

  }
  .loginModal .ivu-modal-header{
     border-bottom: none;
    color: white;

    text-align: center;
  }
  .loginModal .ivu-modal-footer{
    border-top: none;
  }
  .loginModal  .ivu-modal-header .ivu-modal-header-inner{
    color: white;
  }
  .loginModal .ivu-modal-content{
    color: white;
    background-color: rgba(12, 23, 43, 0.46);
  }
  .searchAndLogin>span{
    display: inline-block;
    height: 60px ;
    width: 100px;
    text-align: center;
    line-height: 60px;
    color: white;
    cursor: pointer;
  }
.title{
  width: 100%;
  height: 80px;
  position: absolute;
  color: red;
}
.login{
  margin-left: 20%;
  height: 60px;
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
  width: 150px;
  height: 50px;
  /*background: #5b6270;*/
  border-radius: 3px;
  float: left;
  margin-right: 100px;
  position: relative;
  top: 0px;
  left: 20px;
}
.layout-logo img{
  width: 100%;
  height: 100%;
}
  .title .ivu-menu-light{
    background: none;
  }
  .title .ivu-select-dropdown{
    background-color: rgba(12, 23, 43, 0.46);
  }
.title  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,.title .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
  color:white;
  border-bottom: 0;
  transition: all .5s linear;
}
.title .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,.title .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
  color: #E02D39;
  border-bottom: 2px solid #E02D39;

}
  .title .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-selected,.title .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-selected:hover{
    background-color:rgba(12, 23, 43, 0.46) ;
    color: #E02D39;
  }
</style>
