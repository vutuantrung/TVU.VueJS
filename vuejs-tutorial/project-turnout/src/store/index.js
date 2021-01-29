import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';

const store = createStore({
  state() {
    return {
      user: {},
      events: []
    };
  },
  mutations,
  actions
});

export default store;
