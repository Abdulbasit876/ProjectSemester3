import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/home', component: () => import('./components/Home.vue') },
  { path: '/login', component: () => import('./components/Login.vue') },
  { path: '/register', component: () => import('./components/Register.vue') },
  { path: '/', redirect: '/login' }, // Redirect '/' to '/login'
  { path: '/:pathMatch(.*)*', component: () => import('./components/PageNotFound.vue') }, // Catch-all route for 404
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
