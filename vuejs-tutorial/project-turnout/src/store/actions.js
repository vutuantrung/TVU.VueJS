import * as types from './mutation-types';

export default {
  signIn({ commit }, user_payload) {
    commit(types.SIGN_IN, user_payload);
  },

  signOut({ commit }) {
    commit(types.SIGN_OUT);
  },

  setEvents({ commit }, events_payload) {
    commit(types.SET_EVENTS, events_payload);
  }
};
