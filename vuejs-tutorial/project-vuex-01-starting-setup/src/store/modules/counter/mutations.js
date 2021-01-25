export default {
  increment(state, rootState, rootGetters) {
    state.counter++;
  },
  increase(state, payload, rootState, rootGetters) {
    state.counter = state.counter + payload.value;
  }
};
