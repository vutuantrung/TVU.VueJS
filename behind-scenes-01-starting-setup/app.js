const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

// NOTE Vue's reactivity: which is one of its core features. Essentially viewed as one important thing. The data you define here is something Vue keeps track of. that it would take this data object here and merge all your properties in here into a global behind the scenes managed object, the same object where your methods are merged into by the way.
// NOTE IMPORTANT this keyword will point to the global object
// NOTE but when it comes to the data property, the important and key thing which Vue does is it turns your data object into a reactive data object by essentially wrapping your properties with a JavaScript feature called Proxies.