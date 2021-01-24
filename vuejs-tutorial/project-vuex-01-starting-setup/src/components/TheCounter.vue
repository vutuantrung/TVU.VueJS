<template lang="">
    <div>
        <h3>{{ finalCounter }}</h3>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },

    // mapGetters gives you an object, which we now merge into the computed properties object.
    ...mapGetters(['finalCounter']), // This will point to the methods in getters
  },
};
</script>