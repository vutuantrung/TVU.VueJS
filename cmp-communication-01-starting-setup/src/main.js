import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact';

const app = createApp(App);

app.component('friend-contact', FriendContact);

app.mount('#app');

// NOTE Props is short for properties and you can think of props like custom HTML attributes.
// NOTE We should not use the same name in data property and props property
// NOTE props property should not be mutated, bc because Vue uses a concept which is called unidirectional data flow. But there is 2 way to change it:
// 1. We let the parent know that we'd like to change this.
// 2. We change it in child component, but not change in parent component
