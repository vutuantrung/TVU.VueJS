import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';

const store = createStore({
  state() {
    // eslint-disable-next-line no-unused-labels
    jokes: [];
  },
  mutations,
  actions
});

export default store;
