import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/LoginComponent.vue';
import Register from '@/components/RegisterComponent.vue';
import TrainerDashboard from '@/View/Trainer/TrainerDashboard.vue';
import AdminDashboard from '@/View/Admin/AdminDashboard.vue';
import EmployeeDashboard from '@/View/Employee/EmployeeDashboard.vue';
import UnAuthorized from '@/components/UnauthorizedComponent.vue';
import NotAllowed from '@/components/NotAllowedComponent.vue';
import AddEmployee from '@/View/Admin/AddEmployee.vue';
import AddTrainer from '@/View/Admin/AddTrainer.vue';
import AssignCourse from '@/View/Admin/AssignCourse.vue';
import CourseDetails from '@/View/Employee/CourseDetails.vue';
import QuizBasics from '@/View/Employee/QuizBasics.vue';
import EmployeeDiscussion from '@/View/Employee/EmployeeDiscussion.vue';
import EmployeeQuery from '@/View/Employee/EmployeeQuery.vue';
import EmployeeComplaint from '@/View/Employee/EmployeeComplaint.vue';
import EmployeeProfile from '@/View/Employee/EmployeeProfile.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'home',
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
  },
  // Admin routes
  {
    path: '/admin/dashboard',
    component: AdminDashboard,
    name: 'AdminDashboard',
    meta: {
      requiresAuth: true,
      role: 'admin',
    },
  },
  {
    path: '/admin/add-employee',
    component: AddEmployee,
    name: 'AddEmployee',
    meta: {
      requiresAuth: true,
      role: 'admin',
    },
  },
  {
    path: '/admin/add-trainer',
    component: AddTrainer,
    name: 'AddTrainer',
    meta: {
      requiresAuth: true,
      role: 'admin',
    },
  },
  {
    path: '/admin/assign-course',
    component: AssignCourse,
    name: 'AssignCourse',
    meta: {
      requiresAuth: true,
      role: 'admin',
    },
  },
  // Employee routes
  {
    path: '/employee/dashboard',
    component: EmployeeDashboard,
    name: 'EmployeeDashboard',
    meta: {
      requiresAuth: true,
      role: 'employee',
    },
  },
  {
    path: '/employee/course-details',
    component: CourseDetails,
    name: 'CourseDetails',
    meta: {
      requiresAuth: true,
      role: 'employee',
    },
  },
  {
    path: '/employee/quiz',
    component: QuizBasics,
    name: 'QuizBasics',
    meta: {
      requiresAuth: true,
      role: 'employee',
    },
  },
  {
    path: '/employee/discussion',
    component: EmployeeDiscussion,
    name: 'EmployeeDiscussion',
    meta: {
      requiresAuth: true,
      role: 'employee',
    },
  },
  {
    path: '/employee/query',
    component: EmployeeQuery,
    name: 'EmployeeQuery',
    meta: {
      requiresAuth: true,
      role: 'employee',
    },
  },
  {
    path: '/employee/complaint',
    component: EmployeeComplaint,
    name: 'EmployeeComplaint',
    meta: {
      requiresAuth: true,
      role: 'employee',
    },
  },
  {
    path: '/employee/profile',
    component: EmployeeProfile,
    name: 'EmployeeProfile',
    meta: {
      requiresAuth: true,
      role: 'employee',
    },
  },
  // Trainer routes
  {
    path: '/trainer/dashboard',
    component: TrainerDashboard,
    name: 'TrainerDashboard',
    meta: {
      requiresAuth: true,
      role: 'trainer',
    },
  },
  {
    path: '/not-allowed',
    component: NotAllowed,
    name: 'NotAllowed',
  },
  {
    path: '*',
    component: UnAuthorized,
    name: 'UnAuthorized',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authToken');
  const user = JSON.parse(localStorage.getItem('user'));

  // If a route requires auth and no token exists, redirect to login
  if (to.meta.requiresAuth && !token) {
    return next('/login');
  }

  // If authenticated and the route requires a specific role:
  if (to.meta.requiresAuth && token && user) {
    const role = user.userRole;
    if (to.meta.role && to.meta.role !== role) {
      return next('/not-allowed');
    }
  }

  // Allow navigation
  next();
});

export default router;
