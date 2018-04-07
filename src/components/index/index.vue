<template>
  <div>
    <p>
      <video :src="imgCommon+'/conmon/showImg.php?uuid=1&type=1'" width="100%" loop autoplay></video>
    </p>
   <Row>
     <Col span="24" class="productTitle ">
     <h2>行业智能决策产品</h2>
     <img src="../../assets/images/tips_img_M.png" height="11" width="99"/>
     <p>在智能认知基础上对复杂业务问题进行自动识别和判断，结合行业特点，实现业务路径自动选择的智能产品体系。</p>
     </Col>
   </Row>
    <Row>
     <Col span="20" push="2" class="fle mb30">
        <div class="decision " v-for="item in list.行业智能决策产品" @click="jumpToPro(item.uuid)">
          <img :src="$store.state.imgCommon+'/conmon/showImg.php?uuid='+item.uuid+'&type=14'" alt="">
          <h3>
              {{item.name}}
          </h3>
          <p>
            {{item.description}}
          </p>
        </div>

     </Col>
   </Row>
    <div class="bg_f5">
    <Row>
      <Col span="24" class="productTitle  bg_f5">
      <h2>智能认知产品</h2>
      <img src="../../assets/images/tips_img_M.png" height="11" width="99"/>
      <p>通过动态知识图谱、模型工场、智能文本等系列智能工具，自动识别和判断分析业务问题，帮助行业客户构建智能认知基础能力。</p>
      </Col>
   </Row>
    <Row>

      <Col span="20" push="2" class="relize fle bg_f5">
     <div class="decision" v-for="item in list.智能认知产品" @click="jumpToPro(item.uuid)">
       <img src="../../assets/images/bbc2bd00-be45-4f94-8b54-7ccbcd3ef6a0.png" height="70" width="100"/>
     <h3>  {{item.name}}</h3>
       <p> {{item.description}}</p>
     </div>
      </Col>
    </Row>
    </div>
    <div class="data mb30">
    <Row>
      <Col span="24" class="productTitle">
      <h2>大数据操作系统</h2>
      <img src="../../assets/images/tips_img_M.png" height="11" width="99"/>
      <p>实时处理内外部多源、异构复杂海量数据，构建以数据生命周期管理为核心的数据资产管理平台。</p>
      </Col>
    </Row>
    <Row>
      <Col span="20" push="2" class="system fle ">
      <div class="decision"  v-for="item in list.大数据操作系统" @click="jumpToPro(item.uuid)">
        <img src="../../assets/images/36c25604-8f19-4a46-b86b-6b5543697a36.png" height="90" width="90"/>
        <h3> {{item.name}} </h3>
      </div>
      </Col>
    </Row>

    </div>
    <div class="solution bg_f5 mb30">
      <Row>
        <Col span="24" class="productTitle">
        <h2>解决方案</h2>
        <img src="../../assets/images/tips_img_M.png" height="11" width="99"/>
        <p>依托百分点一系列大数据及人工智能产品，为各行业打造智能场景整体解决方案，使企业能高效、便捷地进行数据资产管理和价值实现。</p>
        </Col>
      </Row>
      <Row>
        <Col span="20" push="2">
        <div class="decision" v-for="item in solutionList" :key="item.uuid">
          <h1>{{item.group}}</h1>
          <div class="show">
            <h1>{{item.group}}</h1>
            <Button type="ghost" class="detail" @click.native="jump(item.uuid)">了解详情</Button>
            <img src="../../assets/images/publicdown_img.png"/>
            <div class="bg"></div>
          </div>
          <img :src="$store.state.imgCommon+'/conmon/showImg.php?uuid='+item.uuid+'&type=13'" alt="">

        </div>

        </Col>
      </Row>
    </div>
  </div>
  </template>
<script>
export default{
data(){
    return{
      list:[],//首页
      solutionList:[],
      imgCommon:'',//图片请求绝对路劲前最
    }
},
  mounted(){
    this.loadIndex();
    this.imgCommon=this.$store.state.imgCommon;
  },methods:{
    jump(uuid){
        console.log(uuid);
        this.$router.push({name:'solution',query:{uuid:uuid}});
    },
    jumpToPro(uuid){
        this.$router.push({name:'product',query:{uuid:uuid}});
    },
    loadIndex(){
        var self=this;
      self.$http.get("/mg-index/mg_index.php").then((m)=>{
        if(m.data.code!='100'){
          self.$Message.info(m.data.msg);
          return false;
        }
        self.list=m.data.data;
        self.solutionList=self.list[0];
      })
    }
  }
}
</script>
<style scoped>
.productTitle{
  text-align: center;
  line-height: 50px;
  padding: 100px 0 50px 0;
}
  .productTitle h2{
    font-size: 35px;
    font-weight: normal;
  }
  .productTitle p{
    color: #666;
  }
  .decision{
    width: 360px;
    height: 280px;
    /*background-color: red;*/
    float: left;
    margin-top: 20px;
padding: 0 20px 10px 20px;
    text-align: center;
  }
  .decision:hover{
    cursor: pointer;
    box-shadow: 0px 0px 15px 2px #777;
    transition: all .5s linear;

  }
.decision:hover h3{
  color:#e21921;
  }
  .decision img{
    width: 50%;
    height: 50%;
  }
  .decision p,h3{
    font-weight: normal;
  margin-top: 10px;
  }
.relize .decision{
  width: 320px;
  height: 280px;
  background-color: #ffffff ;
  float: left;
 margin: 10px 20px 10px 20px;
  text-align: center;
}
.relize .decision img{
  margin-top: 10px;
  width: 100px;
  height: 70px;
}
.relize .decision:hover{
  box-shadow: 0px 0px 5px 1px #fffdef;
  transition: all .5s linear;
}
  .fle{
    display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
  }
  .data .system .decision{
    width: 220px;
    height: 220px;
    border: 1px solid #666;
    border-radius: 50%;
    margin: 10px 20px 10px 20px;

  }
.data .system .decision img{
  width: 90px;
  height: 90px;
  margin-top: 30px;
}
.data .system .decision p,h3{
  font-weight: 700;
  margin-top: 10px;
}
.data .system .decision:hover{
  box-shadow: none;
}
 .solution .decision{
   position: relative;
  width: 250px;
  height: 150px;
   margin-right: 20px;
  float: left;
  margin-top: 20px;
  padding: 0 20px 10px 20px;
  text-align: center;
   overflow: hidden;
}
.solution .decision:hover .show{
  top: 0;

}
.productTitle>img{
  width: auto;
}
.solution .decision:hover>h1{
display: none;

}
.solution .decision h1{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  font-size: 40px;
  font-weight: normal;
  color: white;
  line-height: 180px;
  left: 0;
  z-index: 2;
}
.solution .decision .detail{
margin: 0 auto;
position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -35px;
  color: white;
  z-index: 100;
}
.solution .decision .show{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 180px;
  font-size: 40px;
  font-weight: normal;
  color: white;
  line-height: 180px;
  left: 0;
  z-index: 2;
  transition: all .3s ease;
}
.solution .decision .show .bg{
  width: 100%;
  height: 100%;
  opacity: .7;
  background: #ff3b4d;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.solution .decision .show h1{
  line-height: normal;
  top: 15%;
}
.solution .decision .show img{
  width: auto;
  height: auto;
left: 50%;
  margin-left: -77px;
  top: 50%;

}
.solution .decision img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  z-index: 1;
}
</style>
