import Vue from 'vue';
import Vuex from 'vuex';
import action from './action';
import getter from './getter';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getter,
  action,
  mutations,
});
