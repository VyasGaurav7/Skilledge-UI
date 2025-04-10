import Vue from 'vue';
import VueRouter from 'vue-router';
// import Login from '@/components/Login.vue';
// import Register from '@/components/Register.vue';
import TrainerDashboard from '@/components/TrainerDashboard.vue';
import AdminDashboard from '@/components/AdminDashboard.vue';
import EmployeeDashboard from '@/components/EmployeeDashboard.vue';


Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      redirect: '/login',
      name: 'home',
    },
    // {
    //   path: '/login',
    //   component: Login,
    //   name: 'login',
    // },
    // {
    //   path: '/register',
    //   component: Register,
    //   name: 'register',
    // },
    {
      path: '/ad-dashboard',
      component: AdminDashboard,
      name: 'DashboardComponent', 
    //   meta: {
    //     requiresAuth: true,
    //   },
    },
    {
      path: '/em-dashboard',
      component: EmployeeDashboard,
      name: 'DashboardComponent', 
    //   meta: {
    //     requiresAuth: true,
    //   },
    },
    {
      path: '/tr-dashboard',
      component: TrainerDashboard,
      name: 'DashboardComponent', 
    //   meta: {
    //     requiresAuth: true,
    //   },
    },
  ];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !localStorage.getItem('authToken')) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;
