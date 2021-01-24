<template lang="">
<button @click="incrementCounter">Increment 1</button>
</template>
<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.dispatch('increment');
    },
  },
};
</script>