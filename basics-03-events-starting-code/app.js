const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = lastName + ' ' + event.target.value;
    },
    incrementCounter(num) {
      this.counter += num;
    },
    decrementCounter(num) {
      this.counter -= num;
    },
  },
});

app.mount('#events');

// NOTE: use to add eventListener
// NOTE: we should not add logical expression into HTML section
// NOTE: there is a behavior in JS, when you add a eventLisener and you then point at a function that should be executed when the event occurs, that function will automatically get one argument which describes the event that occurred, full of information about the event
