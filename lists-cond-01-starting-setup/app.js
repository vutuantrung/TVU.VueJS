const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');

// NOTE using v-if: if the condition is satisfied, the element and its child elements will be rendered
// NOTE using v-else: The only important thing is that v-else needs to be used on a direct neighbor element of the element which has v-if. You can't have another element in between.
// IMPORTANT NOTE using v-if: this is not about showing or hiding stuff, it is really about includes/not include the elements in DOM
// NOTE using v-show: it is not like v-if - including element, v-show just hides the elements (like display: none). We use v-show in case you have an element,which visibility status changes a lot. So, if you have like a button that toggles an element and it's switching between visibility and being hidden all the time
// IMPORTANT NOTE inside of the v-for controlled element, so between the opening and closing tags of that element, and also on the element itself, we have access to that goal.
// NOTE when remove an element of a list in DOM, it delete in LIFO way, os the first element still be the old one, it will keep its value and it will be moved to the second one
// NOTE The key attribute, it is not a default HTML attribute, instead it is an attribute understood and detected by Vue. It's optional, but it is a good idea to add it. You should add it to help Vue tell the different elements apart and make sure that state like such entered value is not getting lost.
