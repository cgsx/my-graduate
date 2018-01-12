<template>
  <div id="app">
    <Row class="header_view">
      <Col span="24">
      <router-view></router-view>
      </Col>
    </Row>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'app',
    mounted (){
      Vue.prototype.msg = this.$Message;
      Vue.prototype.spin = this.$Spin;
      window.addEventListener('scroll', this.handleScroll)
    },
   methods: {
     handleScroll () {
       var ele=window.document.getElementsByClassName('ivu-affix')[0];
       if(window.document.getElementsByClassName('ivu-affix').length>0){
         var height=0;
         var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
         if(scrollTop>0){
//            var ele=window.document.getElementsByClassName('index_banner')[0];
//            ele.style.marginTop='115px';

           ele.style.position='fixed' ;
         }else{
           ele.style.position='static' ;
         }
       }

     }
   }

  }
</script>

<style>
  /*::-webkit-input-placeholder { !* WebKit browsers *!*/
    /*color: #fff;*/
  /*}*/

  /*:-moz-placeholder { !* Mozilla Firefox 4 to 18 *!*/
    /*color: #fff;*/
  /*}*/

  /*::-moz-placeholder { !* Mozilla Firefox 19+ *!*/
    /*color: #fff;*/
  /*}*/

  /*:-ms-input-placeholder { !* Internet Explorer 10+ *!*/
    /*color: #fff;*/
  /*}*/
</style>
