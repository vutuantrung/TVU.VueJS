const app = Vue.createApp({
  data() {
    friends: [
      {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 546 832',
        email: 'manuel@localhost.com',
      },
      {
        id: 'julie',
        name: 'Julie Jones',
        phone: '09435 153 354',
        email: 'julie@localhost.com',
      },
    ];
  },
});

app.component('friend-contact', {
  template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>friend.phone</li>
            <li><strong>Email: </strong>friend.email</li>
        </ul>
    </li>
  `,
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
});

// NOTE component is basically like a custom HTML element, it is essentially just annother Vue app, just an app belongs to another app and it connect to the main app (mini app)
// NOTE every component needs its own template

// NOTE Components allow you to easily replicate and encapsulated piece of HTML code with, and that's the important part with attached data and logic. So components encapsulate structure, content and logic into small reusable pieces.

app.mount('#app');
