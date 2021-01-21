const app1 = Vue.createApp({
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

app1.mount('#app1');

const app2 = Vue.createApp({
  template: `
    <div class="demo" :class="['demo', {active: boxASelected}]" @click="boxSelected('A')"></div>
    <div class="demo" :class="['demo', {active: boxBSelected}]" @click="boxSelected('B')"></div>
    <div class="demo" :class="['demo', {active: boxCSelected}]" @click="boxSelected('C')"></div>
  `,
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      this.boxASelected = box === 'A';
      this.boxBSelected = box === 'B';
      this.boxCSelected = box === 'C';
    },
  },
});

app2.mount('#app2');

// NOTE Vue's reactivity: which is one of its core features. Essentially viewed as one important thing. The data you define here is something Vue keeps track of. that it would take this data object here and merge all your properties in here into a global behind the scenes managed object, the same object where your methods are merged into by the way.
// NOTE IMPORTANT this keyword will point to the global object
// NOTE but when it comes to the data property, the important and key thing which Vue does is it turns your data object into a reactive data object by essentially wrapping your properties with a JavaScript feature called Proxies.

// Explication of Proxy: The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

let data = { msg: 'Hello, ', updatedTime: 0 };
let dataTarget = { msg: 'From dataTarget: ', resetValue: false };

const objChanged = {
  // This will override the set property by this method
  set(target, key, value) {
    // Each time the proxy1's property changes, it will update the dataTarget's properties
    if (key === 'msg') msgUpdate(target, dataTarget, value);
    if (key === 'updatedTime') updatedTimeChanged(target, dataTarget, value);
  },
};

const updatedTimeChanged = (currentElement, targetElement, value) => {
  targetElement.resetValue = value > 10;
  currentElement.udpatedTime += value;
};

const msgUpdate = (currentElement, targetElement, value) => {
  currentElement.msg = value;
  targetElement.msg += value;
};

// Create a new proxy and add msgChanged handler
const proxy1 = new Proxy(data, objChanged);
proxy1.msg = 'new value';
proxy1.updatedTime = 1;

console.log(dataTarget);

proxy1.updatedTime = 12;

console.log(dataTarget);
