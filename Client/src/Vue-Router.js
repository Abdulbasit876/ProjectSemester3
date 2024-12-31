import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./components/Home.vue') },
  { path: '/login',
    name: 'login'
    , component: () => import('./components/Login.vue') },
  { path: '/register', 
    name: 'register',
    component: () => import('./components/Register.vue') },
  {
    path: '/upoadvideo',
    name: 'uploadvideo',
    component:()=>import('./components/Video.vue'),
    meta: { requiresAuth: true },
  },
  {
    path:"/gallery",
    name:"gallery",
    component:()=>import('./components/Gallery.vue'),
  },
  { path: '/:pathMatch(.*)*', component: () => import('./components/PageNotFound.vue') }, // Catch-all route for 404
];
 const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {

//   if (to.meta.requiresAuth && !localStorage.getItem('token')) {
//     next({ name: 'login' });
//   }else if (!localStorage.getItem('hasRegister') && to.name !== 'register') {
//     next({ name: 'register' });
//   }
//   else {
//     next();
//   }
// })

export default router;
