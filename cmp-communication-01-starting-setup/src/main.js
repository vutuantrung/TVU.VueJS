import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact';

const app = createApp(App);

app.component('friend-contact', FriendContact);

app.mount('#app');

// NOTE Props is short for properties and you can think of props like custom HTML attributes.
// NOTE We should not use the same name in data property and props property
