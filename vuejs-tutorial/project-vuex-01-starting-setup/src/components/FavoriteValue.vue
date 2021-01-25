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
    //   return this.$store.getters['numbers/normalizedCounter'];
    // },

    // ...mapGetters('numbers', ['normalizedCounter']),

    ...mapGetters('numbers', {
      result: 'normalizedCounter',
    }),
  },
};
</script>