import * as types from './mutation-types';

export default {
  initJokes({ commit }) {
    fetch('https://official-joke-api.appspot.com/jokes/ten', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => commit(types.INIT_JOKES, json));
  },

  addJoke({ commit }) {
    fetch('https://official-joke-api.appspot.com/random_joke', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => commit(types.ADD_JOKE, json));
  },

  removeJoke({ commit }, index) {
    commit(types.REMOVE_JOKE, index);
  }
};
