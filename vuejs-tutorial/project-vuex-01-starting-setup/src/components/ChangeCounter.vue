<template lang="">
<button @click="incrementCounter">Add 1</button>
</template>
<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.commit('increment');
    },
  },
};
</script>