// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/font/iconfont.css'//图标
import './assets/css/common.css'//公共的css
import './assets/common/reseteAjax'//重写ajax
import promise from 'es6-promise'
import $ from 'jquery'
promise.polyfill();//axios兼容ie
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.use(iView);
Vue.config.productionTip = false


//时间格式化
Vue.filter('date', function(input){
  let oDate = new Date(input);
  return oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate()+' '+ (oDate.getHours()< 10 ? '0'+oDate.getHours() : oDate.getHours() )+':'+ (oDate.getMinutes()< 10 ? '0'+ oDate.getMinutes() : oDate.getMinutes())+':'+ (oDate.getSeconds()< 10 ? '0'+ oDate.getSeconds() : oDate.getSeconds());
});
Vue.filter('dateNum', function(input){
  let oDate = new Date(input);
  return oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate();
});
Vue.filter('dateForm', function(input){
  let dateFarm = new Date(input);
  return dateFarm.getFullYear()+'-'+(dateFarm.getMonth()+1)+'-'+dateFarm.getDate()+'  '+dateFarm.getHours()+':'+dateFarm.getMinutes()+':'+dateFarm.getSeconds();
});
//字符串截断
Vue.filter('trunc', function(value,num) {
  if(!value){
    return false;
  }else if(value.length <= num){
    return value;
  }else{
    let return_value = String(value);
    return return_value.substring(0,num)+"...";
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

