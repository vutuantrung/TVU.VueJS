<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },

  inject: ['users'],

  methods: {
    confirmInput() {
      // do somthing(Ex: send http request...)

      this.$router.push('/teams'); // push url to history, looing for more in docs (push(), back(), forward())
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },

  data() {
    return {
      changesSaved: false,
    };
  },

  beforeRouteLeave(to, from, next) {
    console.log('UsersList beforeRouteLeave');

    // Make sure that data is saved
    if (this.changesSaved) {
      next();
    } else {
      const leave = confirm('You have unsaved changes? Want to leave ?');
      next(leave);
    }
  },

  beforeRouteEnter(to, from, next) {
    console.log('UsersList beforeRouteEnter');
    next();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>