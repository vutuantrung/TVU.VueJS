import { createRouter, createWebHistory } from 'vue-router';

import Data from './components/Data';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/data/:type',
      component: Data
    }
  ]
});

export default router;
