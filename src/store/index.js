import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0,
    lastTeam: '',
  },
  mutations: {
    addSum(state,payload) {
      state.sum++;
      state.lastTeam=payload;
      
    }
  }
})