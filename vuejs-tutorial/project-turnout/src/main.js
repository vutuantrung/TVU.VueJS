import { createApp } from 'vue';

import store from './store/index';
import router from './router';

import App from './components/App';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
