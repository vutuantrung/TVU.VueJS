<template>
  <base-container title="Vuex">
    <TheCountner />
    <button @click="incrementCounter">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCountner from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCountner,
  },
  methods: {
    incrementCounter() {
      this.$store.state.counter++;
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