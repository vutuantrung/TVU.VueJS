<template>
  <base-container title="Vuex" v-if="isAuth">
    <TheCountner />
    <FavoriteValue />
    <button @click="increase({ value: 10 })">Increase 10</button>
    <ChangeCounter />
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCountner from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import { mapActions } from 'vuex';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCountner,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    // addCounter(number) {
    //   // this.$store.dispatch('addNumber', { value: number });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },

    ...mapActions({
      increase: 'increase',
    }),
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