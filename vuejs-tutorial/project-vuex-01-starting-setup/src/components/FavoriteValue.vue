<template lang="">
    <div>
        <h3>{{ result }}</h3>
        <p>We do more...</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },

    // ...mapGetters(['normalizedCounter']),

    ...mapGetters({
      result: 'normalizedCounter',
    }),
  },
};
</script>