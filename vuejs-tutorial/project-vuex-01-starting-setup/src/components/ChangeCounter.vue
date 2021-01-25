<template lang="">
<button @click="inc">Increment 1</button>
<button @click="increase({value: 11})">Increase 11</button>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // incrementCounter() {
    //   this.$store.dispatch('numbers/increment');
    // },

    // ...mapActions('numbers', ['increment', 'increase']),

    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>