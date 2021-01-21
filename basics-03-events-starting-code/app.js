const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add: function () {
      this.counter++;
    },
    reduce: function () {
      this.counter--;
    },
  },
});

app.mount('#events');

// NOTE: use to add eventListener
