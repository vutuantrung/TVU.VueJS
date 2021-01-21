const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  computed: {
    // Define methods here but they will be called and executed differently
    fullName() {
      return 'VU Tuan ' + ' ' + this.name;
    },
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
// !IMPORTANT: when calling method in computed, we have to POINT it, NOT CALL it. We use it like a PROPERTY, not a FUNCTION
// NOTE: when a method in HTML file called, Vue will check if there is this method's name in the "data" property, if not it will check if there is may be as a "computed" property with the name.
// NOTE: with the computed property, Vue will aware of the dependencies of the computed property's member, and it will cache and re-execute if there is a dependency in the data property changes
