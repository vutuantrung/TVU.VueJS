import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: '/teams'
    },
    {
      path: '/teams',
      component: TeamsList
    },
    {
      path: '/users',
      component: UsersList
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
      props: true
    },
    {
      // This is for '/something' url that client can create, it will redirect to '/teams/
      path: '/:notFound(.*)',
      redirect: '/teams'
    }
  ], //This will tell Vue that which router will display which component
  linkActiveClass: 'router-link-active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
