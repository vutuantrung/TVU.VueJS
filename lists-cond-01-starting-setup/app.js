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
// NOTE using v-else: The only important thing is that v-else needs to be used on a direct neighbor element of the element which has v-if. You can't have another element in between.
// IMPORTANT NOTE using v-if: this is not about showing or hiding stuff, it is really about includes/not include the elements in DOM