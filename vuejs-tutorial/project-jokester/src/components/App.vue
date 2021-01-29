<template>
  <div id="app">
    <h3>Get jokes?</h3>
    <button class="btn btn-primary" @click="initJokes">
      Add ten random Jokes
    </button>
    <button class="btn btn-primary" @click="addJoke">Add a Joke</button>
    <br />
    <span v-for="(typeJ, index) in types" :key="index">
      <input type="checkbox" :value="typeJ" v-model="checkedTypes" checked />
      <label>{{ typeJ }}</label
      >&nbsp;
    </span>
    <br />
    <div class="col_md_12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
        :joke="joke"
        :index="index"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from './Joke.vue';

export default {
  data() {
    return {
      types: ['general', 'knock-knock', 'programming'],
      checkedTypes: ['general', 'knock-knock', 'programming'],
    };
  },
  methods: {
    ...mapActions(['initJokes', 'addJoke']),
  },
  components: {
    Joke,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3350;
  margin-top: 60px;
}

.joke-card {
  border: 2px solid #2c3350;
  border-radius: 2px;
  padding: 5px;
  margin: 5px;
}
</style>
