<template lang="">
    <li>
        <h2>{{ name }}  {{ friendIsFavorite === '1' ? ' (Favorite)' : '' }}</h2>
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
  props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'], // we can use these variables like int data property
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 546 832',
        email: 'manuel@localhost.com',
      },
      friendIsFavorite: this.isFavorite,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0';
      } else {
        this.friendIsFavorite = '1';
      }
    },
  },
};
</script>

<style lang="">
</style>