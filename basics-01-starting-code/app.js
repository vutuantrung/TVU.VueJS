const app = Vue.createApp({
  data: function () {
    // always return an object
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
    };
  },
  // methods allows you to define functions
  methods: {
    outputGoal: function () {
      return Math.random() < 0.5 ? 'Learn Vue!' : 'Master Vue';
    },
  },
});

// Apply Vue control into a HTML element
app.mount('#user-goal');

// 2 core  features of VueJS: data and interpolation {{ param }}
// In the intnerpolation block, we can add simple javascript EXPRESSION (not STATEMENT - ex: if/else). Ex {{ 1 + 1 }}
