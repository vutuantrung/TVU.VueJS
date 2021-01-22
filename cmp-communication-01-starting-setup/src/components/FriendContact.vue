<template lang="">
    <li>
        <h2>{{ name }}  {{ isFavorite ? ' (Favorite)' : '' }}</h2>
        <button @click="toggleFavorite()">Toggle favorite</button>
        <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{phoneNumber}}</li>
            <li><strong>Email: </strong>{{emailAddress}}</li>
        </ul>
    </li>
</template>
<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'], // we can use these variables like int data property
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['toggle-favorite'],
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing');
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id);
      // this.$emit('toggle-favorite');
    },
  },
};
</script>

<style lang="">
</style>