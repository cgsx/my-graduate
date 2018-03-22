*<template>
<div class="title">
  <Menu mode="horizontal"  active-name="1" @on-select="jumpToPage" class="titleone">
    <div class="layout-logo">
      <img src="../../assets/images/logo.png" />
    </div>
    <MenuItem name="index">
      首页
    </MenuItem>

    <Submenu name="product">
      <template slot="title">
        产品
      </template>
      <MenuGroup :title="key" v-for="(item,key) in prolist" :key="key">
        <MenuItem :name="JSON.stringify({'product':'product','uuid':pro.uuid})" v-for="pro in item" :key="pro.uuid">{{pro.name}}</MenuItem>
      </MenuGroup>
    </Submenu>

    <Submenu name="solution">
      <template slot="title">
        解决方案
      </template>

        <MenuItem :name="JSON.stringify({'product':'solution','uuid':item.uuid})" v-for="item in solutionList" :key="item.uuid">{{item.group}}</MenuItem>

    </Submenu>
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
      <span class="login" @click="Login=true" v-if="username==''">
          登录
      </span>
    <span  class="login" v-if="username!=''" @click="loginOut">注销</span>
    <span class="search "  v-if="username==''">
       未登录
      </span>
    <span class="search "  v-if="username!=''">
      {{username}}
      </span>
  </div>
  <Modal
    title="登录"
    v-model="Login"
    :mask-closable="false"
  class="loginModal"
    width="300">

    <p class="inputMSg">
      <Input v-model="dologin.uname" placeholder="请输入用户名">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="dologin.upwd" placeholder="请输入密码" type="password">
      </Input>
    </p>
    <p class="inputMSg" >
      <Input v-model="dologin.vcode" placeholder="请输入验证码" >
      <span slot="append"><img class="cursor" src="http://localhost:8080/my_graduate/conmon/showSmg.php"  onclick="this.src='http://localhost:8080/my_graduate/conmon/showSmg.php?'+new Date().getTime();" alt=""></span>
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
      <Input v-model="registerList.uname" placeholder="请输入姓名">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="registerList.upwd" placeholder="请输入密码" type="password">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="sureUpwd" placeholder="请确认密码"type="password">
      </Input>
    <p class="inputMSg">
      <Input v-model="registerList.phone" placeholder="请输入电话">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="registerList.email" placeholder="请输入邮箱">
      </Input>
    </p>
    <p class="inputMSg">
      <Input v-model="registerList.company_name" placeholder="请输入公司名称">
      </Input>
    </p>

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
              username:'',
            Login:false,
            register:false,
            restpwd:false,
            sureUpwd:'',
            msg:'',
            prolist:[],//产品列表
            solutionList:[],//解决方案列表
          registerList:{
            uname:'',
            upwd:'',
            phone:'',
            email:'',
            company_name:''
          },
            dologin:{
                uname:'',
              upwd:'',
              vcode:''
            }
          }
    },
    mounted:function () {
        if(localStorage.getItem("userInfo")!=null){
          this.username=JSON.parse(localStorage.getItem("userInfo"))[0].uname;
//          console.log(JSON.parse(localStorage.getItem("userInfo")))
        }
      this.loadPro();
        this.loadsolution();
    }

  ,
    methods:{

      loadsolution(){
          var self=this;
        self.$http.get("/mg_solution/mg_solution.php").then((m)=>{
          if(m.data.code!='100'){
            self.$Message.info(m.data.msg);
            return false;
          }
        self.solutionList=m.data.data;
        })
      },      loadPro(){
          var self=this;
        self.$http.get("/mg_pro/prolist.php").then((m)=>{
          if(m.data.code!='100'){
            self.$Message.info(m.data.msg);
            return false;
          }
        self.prolist=m.data.data;
        })
      },
//        注销登录
      loginOut(){
        localStorage.clear();
        this.username='';
      },
//        跳转页面
      jumpToPage(route){
          var self=this;
if(route.indexOf('{')==-1){
  self.$router.push({name:route});
}else{
  var routers=JSON.parse(route);
  self.$router.push({name:routers.product,query:{uuid:routers.uuid}});
}

      },
      loginIn(){//登录模态框
          var self=this;
        self.$http.post("/mg_login/login.php",self.dologin).then((m)=>{
          if(m.data.code!='100'){
            self.$Message.info(m.data.msg);
            return false;
          }
          localStorage.setItem("userInfo",JSON.stringify(m.data.data));
          self.$Message.info(m.data.msg);
          self.Login=false;
          self.username=JSON.parse(localStorage.getItem("userInfo"))[0  ].uname;

        })

      },
      regis(){//注册模态框
          var self=this;

        self.login=false;
        self.register=true;
      },
      doRegister(){//注册
        var self=this;
        self.$http.post("/mg_login/register.php",self.registerList).then((m)=>{
          if(m.data.code!='100'){
              self.$Message.info(m.data.msg);
              return;
          }
          self.$Message.info(m.data.msg);
          console.log(m.data.msg)
          self.register=false;
        }).catch(function () {
          self.$Message.info("请求失败！");
        })
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
  .inputMSg .ivu-input-group-append, .ivu-input-group-prepend{
    padding: 0;
  }
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
.title .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,.title .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,.title .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,.title .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
  color: #E02D39;
  border-bottom: 2px solid #E02D39;

}
  .title .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-selected,.title .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-selected:hover{
    background-color:rgba(12, 23, 43, 0.46) ;
    color: #E02D39;
  }
</style>
