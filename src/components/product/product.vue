<template>
  <div>
  <div class="productTitle" >
      <img src="../../assets/images/product.png"/>
      <div class="titleText">
    <h1>{{proList.name}}</h1>
    <p>{{proList.description}}</p>
    <p><Button type="error" size="large" @click="openLeave">立即咨询</Button></p>
  </div>
    <div class="productMudele" v-for="item in proList.deslist" :key="item.uuid">
      <p class="top">{{item.title}}</p>
      <p>
      {{item.detail}}
      </p>
    </div>
    <div class="productMudele clearfix">
      <p class="top">产品功能</p>
    <div class="Gn" v-for="item in proList.funlist">
        <p>
          <img :src="$store.state.imgCommon+'/conmon/showImg.php?uuid='+item.uuid+'&type=2'" alt="">

        </p>
      <p class="GnTitle">
        {{item.detailtitle}}
      </p>
      <p class="GnContent">
        {{item.detail}}
      </p>
    </div>
    </div>
    <div class="productMudele clearfix">
      <p class="top">产品优势</p>
      <div class="yS clearfix" v-for="item in proList.advenlist" :key="item.uuid">
        <div style="margin: 0 auto">
          <img :src="$store.state.imgCommon+'/conmon/showImg.php?uuid='+item.uuid+'&type=3'" alt="">

        </div>
        <div class="ysRight">
          <p class="YsTitle">
            {{item.detailtitle}}
          </p>
          <p class="YsContent">
            {{item.detail}}
          </p>
        </div>
      </div>
    </div>
    <div class="productMudele ">
      <p class="top">应用场景</p>
      <Tabs >
        <TabPane :label="item.detailtitle" :name="item.uuid"  v-for="item in proList.applist" :key="item.uuid">
          {{item.detail}}
        </TabPane>
      </Tabs>

      </div>
    </div>
    <Modal
      v-model="modal1"
      title="咨询"
    >
      <p>
      <Form ref="formItem" :model="formItem" :rules="formItemRule" :label-width="80">
        <FormItem label="需求提交" prop="msg">
          <Input v-model="formItem.msg" type="textarea" placeholder="请输入需求"></Input>
        </FormItem>
      </Form>
      </p>
      <p slot="footer">
        <Button type="primary" @click="leaveMsg">确定</Button>
        <Button type="ghost" @click="modal1=false">取消</Button>
      </p>
    </Modal>
  </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
        uuid:this.$route.query.uuid,
        proList:'',
        modal1:false,
        formItem:{
          msg:''
        },
        formItemRule:{
          msg:[{required:true,message:'不能为空'}]
        }
      }
    },
    mounted(){
      this.uuid=this.$route.query.uuid;
        this.loadProList();
    },
   updated(){
//        this.uuid=this.$route.query.uuid;
//        console.log(111)

   },
    watch:{
    uuid:function () {

      this.loadProList();
  }
    },
    methods:{
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
          self.$refs.formItem.validate((valid) => {
              if (valid) {
          self.$http.post("mg_zx/mg_work_insert.php",self.formItem).then((m)=>{
            if(m.data.code!='100'){
              self.$Message.info(m.data.msg);
              return false;
            }

            self.modal1=false;
          })
              }else{
                self.$Message.info("不通过");
              }
          })
        }
        else{
          self.$Message.info("未登录，请登录！");
        }


      },
        loadProList(){
          var self=this;
          self.$http.post("/mg_pro/prodetail.php",{uuid:self.uuid}).then((m)=>{
            if(m.data.code!='100'){
              self.$Message.info(m.data.msg);
              return false;
            }
            self.proList=m.data.data;
          })
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
  .yS img{
    margin-left: 50px;
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
.yS  img,.Gn img{
    width:200px;
    height: 100px;
  }
 .productMudele .Gn{
    width: 48%;
   margin-right: 10px;
   margin-bottom: 10px;
    height: 350px;
    background: #e1e1e1;
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
