<template>
  <base-container title="Vuex">
    <TheCountner />
    <FavoriteValue />
    <button @click="addCounter(10)">Increase 10</button>
    <ChangeCounter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCountner from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCountner,
    ChangeCounter,
    FavoriteValue,
  },
  methods: {
    addCounter(number) {
      // this.$store.dispatch('addNumber', { value: number });
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>