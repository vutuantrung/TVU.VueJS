const app = Vue.createApp({
  data: function () {
    // always return an object
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
      vueLink: 'https://vuejs.org/',
    };
  },
  // methods allows you to define functions
  methods: {
    outputGoal: function () {
      return Math.random() < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

console.log(app);

// Apply Vue control into a HTML element
app.mount('#user-goal');

// Note: 2 core  features of VueJS: data and interpolation {{ param }}
// Note: In the intnerpolation block, we can add simple javascript EXPRESSION (not STATEMENT - ex: if/else). Ex {{ 1 + 1 }}

// Note: It basically takes all the data you return in this data object, which you return the data method, and it merges it into a global Vue instance object.
