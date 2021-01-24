import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: '/teams'
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId', // /teams/:teamId
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter: (to, from, next) => {
        console.log('users beforeEnter');
        next();
      }
    },
    {
      // This is for '/something' url that client can create, it will redirect to '/teams/
      path: '/:notFound(.*)',
      redirect: '/teams'
    }
  ], //This will tell Vue that which router will display which component
  linkActiveClass: 'router-link-active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  }
});

router.beforeEach(function(to, from, next) {
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  }
  next();
});

router.afterEach(function(to, from) {
  // sending analytics data
  console.log('Global afterEach');
});

export default router;
