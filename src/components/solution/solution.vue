<template>
  <div class="productTitle">
    <img src="../../assets/images/product.png"/>
    <div class="titleText">
      <h1>{{solutionList.group}}</h1>
      <p>{{solutionList.description}}</p>
      <p><Button type="error" size="large" @click="openLeave">立即咨询</Button></p>
    </div>
    <div class="solutionModule" v-for="item in solutionList.funlist">
      <p class="BjTitle">
        {{item.title}}
      </p>
      <p class="BjContent">
        {{item.detail}}
         </p>
    </div>
    <div class="solutionModule" v-for="item in solutionList.deslist">
      <p class="BjTitle">
        {{item.title}}
      </p>
      <p class="GsContent">
<span class="GsNer">
{{item.detail}}
</span>
        <span class="GsImg">
                  <img :src="$store.state.imgCommon+'/conmon/showImg.php?uuid='+item.uuid+'&type=4'" alt="">
        </span>
      </p>
    </div>
    <div class="solutionModule">
      <p class="BjTitle">应用场景</p>
      <Tabs >
        <TabPane :label="item.detailtitle" :name="item.uuid"  v-for="item in solutionList.applist" :key="item.uuid">
          {{item.detail}}
        </TabPane>
      </Tabs>
    </div>
    <div class="solutionModule clearfix">
      <p class="BjTitle">方案优势</p>
      <div class="yS clearfix"  v-for="item in solutionList.advenlist">
        <div>
          <img :src="$store.state.imgCommon+'/conmon/showImg.php?uuid='+item.uuid+'&type=5'" alt="">

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

  </div>
</template>
<script>
  export default {
    name:'product',
    data(){
      return {
        uuid:'',
        solutionList:[] ,
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
      this.loadSolutions();
    },  updated(){
      this.uuid=this.$route.query.uuid;
      console.log(this.uuid);
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
        loadSolutions(){
          var self=this;

          self.$http.post("mg_solution/detail.php",{uuid:self.uuid}).then((m)=>{
            if(m.data.code!='100'){
              self.$Message.info(m.data.msg);
              return false;
            }
            self.solutionList=m.data.data;
          })

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
