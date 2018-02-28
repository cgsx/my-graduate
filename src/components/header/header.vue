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
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
      </span>
  </div>
  <Modal
    title="登录"
    v-model="login"
    :mask-closable="false"
  class="loginModal"
    width="300">

    <p class="inputMSg">
      <Input v-model="username" placeholder="请输入电话">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="pwd" placeholder="请输入密码">
      </Input>
    </p>
    <p class="inputMSg" >
      <Input v-model="msg" placeholder="请输入验证码">
      <span slot="append">验证码</span>
      </Input>
    </p>
    <p slot="footer">
      <Button type="primary" @click="loginIn">登录</Button>
      <div>
      <span class="resetPwd cursor" @click="rest">忘记密码？</span>
      <span class="register cursor" @click="regis">立即注册</span>
  </div>
    </p>
  </Modal>
  <Modal
    title="注册"
    v-model="register"
    :mask-closable="false"
    class="loginModal"
  width="300">
    <p class="inputMSg">
      <Input v-model="username" placeholder="请输入姓名">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="pwd" placeholder="请输入电话">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="msg" placeholder="请输入邮箱">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="msg" placeholder="请输入公司名称">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="msg" placeholder="请输入密码">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="msg" placeholder="请确认密码">
      </Input>
    </p>
    <p slot="footer">
      <Button type="primary" @click="doRegister">注册</Button>

    </p>
  </Modal>
  <Modal
    title="重置密码"
    v-model="restpwd"
    :mask-closable="false"
    class="loginModal"
    width="300">
    <p class="inputMSg">
      <Input v-model="msg" placeholder="请输入电话">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="msg" placeholder="请输入旧密码">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="msg" placeholder="请输入新密码">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="msg" placeholder="请确认新密码是否匹配">
      </Input>
    </p>
    <p slot="footer">
      <Button type="primary" @click="doReset">更改</Button>

    </p>
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
      },
      loginIn(){//登录模态框
          var self=this;

          self.login=false;
      },
      regis(){//注册模态框
          var self=this;
        self.login=false;
        self.register=true;
      },
      doRegister(){//注册
          this.$Message.info("注册成功")
      },
      rest(){//修改密码模态框
          var self=this;
          self.login=false;
          self.restpwd=true;
      },
      doReset(){//修改密码
        this.$Message.info("修改成功");

      }
    }
  }
</script>
<style >
  .loginModal input::-webkit-input-placeholder{
    color: white;opacity:1;
  }
  .loginModal input{
    background: none;
    color: white;
  }
  .register{
    display: block;
    text-align: left;
float: left;
    padding-left: 5px;
    line-height: 50px;
  }
  .resetPwd{
    display: block;
    text-align: right;
    line-height: 50px;
    padding-right: 5px;

float: right;
  }
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
    text-align: center;
  }
  .loginModal .ivu-modal-footer{
    border-top: none;
  }
  .loginModal .ivu-btn-ghost{
    background: white;
  }
  .loginModal .ivu-btn{
    width: 100%;
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
    background-color: rgba(12, 23, 43, 0.6);
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
