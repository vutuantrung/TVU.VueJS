const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: '',
    };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoalValue)
    }
  }
});

app.mount('#user-goals');

// NOTE using v-if: if the condition is satisfied, the element and its child elements will be rendered