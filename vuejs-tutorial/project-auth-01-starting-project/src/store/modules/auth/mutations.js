import * as types from '../../mutations-type';

export default {
  [types.SET_USER](state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  [types.SET_AUTO_LOGOUT](state) {
    state.didAutoLogout = true;
  }
};
