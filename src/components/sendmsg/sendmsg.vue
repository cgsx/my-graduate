<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>留言系统</h1>
      <p>
        请用户将宝贵的意见留言给我们，欢迎留言
      </p>
      <p><Button type="error" size="large" @click="openLeave">立即留言</Button></p>
    </div>
    <Row class="userMsg" v-for="item in dataList" :key="item.uuid">
      <Col span="1" offset="2">
            <Avatar>{{item.uname}}</Avatar>
      </Col >
      <Col span="2">
      <h3 class="info">{{item.uname}}</h3>
      <p>{{item.time}}</p>
      </Col>
      <Col span="17">
      <h3 class="info">留言信息</h3>
<p>{{item.msg}}</p>
      </Col>
      <Modal
        v-model="modal1"
        title="留言"
      >
        <p>
        <Form :model="formItem" :label-width="80">
          <FormItem label="留言信息">
            <Input v-model="formItem.msg" type="textarea" placeholder="请输入留言信息"></Input>
          </FormItem>
        </Form>
        </p>
        <p slot="footer">
          <Button type="primary" @click="leaveMsg">确定</Button>
          <Button type="ghost" @click="modal1=false">取消</Button>
        </p>
      </Modal>
    </Row>

    </div>
</template>
<script>
  export default {
    name:'sendmsg',
    data(){
      return {
        dataList:[],
        modal1:false,
        formItem:{
          msg:''
        }
      }
    },mounted(){
      this.loadList();
    },methods:{
        openLeave(){
            var self=this;
          var name=JSON.parse(localStorage.getItem("userInfo"));
          if(name!=null){
    self.modal1=true;
          }else{
            self.$Message.info("请登录");
          }
        },
      leaveMsg(){
          var self=this;
          var name=JSON.parse(localStorage.getItem("userInfo"));

          if(name!=null){
              self.formItem.userid=name[0].uuid;
            self.$http.post("mg_word/mg_work_insert.php",self.formItem).then((m)=>{
              if(m.data.code!='100'){
                self.$Message.info(m.data.msg);
                return false;
              }
  self.loadList();
              self.modal1=false;
            })
          }
        else{
              self.$Message.info("未登录，请登录！");
          }


      },
      loadList(){
        var self=this;
        self.$http.post("mg_word/mg_word.php").then((m)=>{
          if(m.data.code!='100'){
            self.$Message.info(m.data.msg);
            return false;
          }
          self.dataList=m.data.data;
        })
      }
    }
  }
</script>
<style >
  .info{
    color: #79c2ff;
  }
.userMsg{
  margin: 20px;
  padding: 10px;
  border: 1px dashed #cccccc;
  color: #0C172B;
  border-radius: 10px;
}
  .productTitle{
    position: relative;
  }
  .productTitle>img{
    width: 100%;
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
