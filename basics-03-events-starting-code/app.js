const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    outputFullName() {
      return this.name + ' ' + 'VU TUAN';
    },
    confirmName(event) {
      this.confirmedName = event.target.value;
    },
    submitForm(event) {
      alert('Submitted !');
    },
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
// NOTE: Vue has "event modifier" to change the event behavior. Ex: v-on:submit.<behavior>. See more at https://vuejs.org/v2/guide/events.html
// !IMPORTANT : if we add methods in HTML file, VUE will re-executed all of them when there is a change of the page (update a parameter in data), bc Vue do not know what these methods do,
