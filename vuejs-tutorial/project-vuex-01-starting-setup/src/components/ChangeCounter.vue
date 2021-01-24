<template lang="">
<button @click="incrementCounter">Add 1</button>
</template>
<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.commit('addNumber', { value: 1 });
    },
  },
};
</script>