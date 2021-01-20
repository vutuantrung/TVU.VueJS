const app = Vue.createApp({
  data: function () {
    // always return an object
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
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
// Note: v-html is used to tell Vue that the content in data should be interpreted as HTML, but you can introduce security issues, bc you basically curymvent the built in cross site scripting attact protection

// SUMMARY: we typically say that we use a declarative approach or that Vue uses a declarative approach.
// And that's just a fancy way of saying we, as a developer define the goal. We define a template, you could say, of the content we wanna have.
// We mark the parts which are dynamic like this one, or like this href attribute here, which is bound with v-bind, and Vue will then do the rest for us.
// It does all the magic behind the scenes, it outputs concrete values here and here.
// And it updates the real DOM, which is rendered to the screen and what the user sees behind the scenes on our behalf.
// So we, as a developer just define the final picture with the dynamic placeholders you could say, and we don't define all the steps of getting that picture onto the screen.
// That's what we do with a framework like Vue. And that's why we also typically say that Vue uses a declarative approach.
// We just declare our goal. We don't care about the steps of getting there. Now it's time to practice this.
