/**
 * Created by Administrator on 2018/3/24.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    imgCommon: 'http://localhost:8080/my_graduate'
  }
});
export default  store
