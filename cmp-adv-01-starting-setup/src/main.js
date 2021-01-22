import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';


const app = createApp(App);
// Keep this component bc it is used in multiple components
app.component('base-badge', BaseBadge);

app.mount('#app');

// NOTE if we use app.component(...), we are registering those components as so called Global Components - Components you can use anywhere in your Vue app - i.e any template. And if you're registering them all globally, that in the end means Vue needs to load them all when the application is loaded initially.

// NOTE <the-header /> doesn't work, <TheHeader /> works