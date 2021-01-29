import * as types from '../../mutations-type';

export default {
  [types.ADD_REQUEST](state, payload) {
    state.requests.push(payload);
  },
  [types.SET_REQUEST](state, payload) {
    state.requests = payload;
  }
};
