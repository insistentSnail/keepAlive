import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catch_components: [],
  },
  mutations: {
    GET_CATCHE_COMPONENTS(state, data) {
      state.catch_components = data;
    },
  },
  actions: {},
  modules: {},
});
