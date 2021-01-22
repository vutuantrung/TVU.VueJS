<template lang="">
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{phoneNumber}}</li>
            <li><strong>Email: </strong>{{emailAddress}}</li>
        </ul>
    </li>
</template>
<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress'], // we can use these variables like int data property
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 546 832',
        email: 'manuel@localhost.com',
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<style lang="">
</style>