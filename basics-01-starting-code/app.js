const app = Vue.createApp({
  data: function () {
    // always return an object
    return {
      courseGoal: 'Finish the course and learn Vue!',
    };
  },
});

// Apply Vue control into a HTML element
app.mount('#user-goal');

// 2 core  features of VueJS: data and interpolation {{ param }}
