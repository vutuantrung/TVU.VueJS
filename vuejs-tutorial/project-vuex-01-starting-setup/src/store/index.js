import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

import counterModule from './modules/counter/index';

const store = createStore({
  modules: {
    numbers: counterModule // numbers is the namespace of counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActions, // actions property allows methods running asynchronously
  getters: rootGetters
});

export default store;
