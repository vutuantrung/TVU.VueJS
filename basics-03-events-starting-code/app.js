const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter: function (num) {
      this.counter += num;
    },
    decrementCounter: function (num) {
      this.counter -= num;
    },
  },
});

app.mount('#events');

// NOTE: use to add eventListener
// NOTE: we should not add logical expression into HTML section
