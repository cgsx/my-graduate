<template>
  <div id="app">
    <Row class="header_view">
      <Col span="24">
      <v-header></v-header>
      <router-view></router-view>
      <v-footer></v-footer>
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
    },

   methods: {

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
