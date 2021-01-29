import * as types from '../../mutations-type';

export default {
  [types.REGISTER_COACH](state, payload) {
    state.coaches.push(payload);
  },
  [types.SET_COACHS](state, payload) {
    state.coaches = payload;
  },
  [types.SET_FETCH_TIME](state) {
    state.lastFetch = new Date().getTime();
  }
};
