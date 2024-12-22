<template>
    <div class="h-screen flex items-center justify-center bg-black text-white">
      <transition name="fade" mode="out-in">
        <div v-if="show" class="text-center">
          <div class="text-6xl mb-4 animate-pulse">😞</div>
          <h1 class="text-8xl font-extrabold mb-4">404</h1>
          <p class="text-2xl mb-8">Sorry, we can't find that page</p>
          <router-link to="/" class="text-lg text-red-600 hover:text-red-500">Go to Home</router-link>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name:'pageNotFound',
    data() {
      return { show: true };
    },
    mounted() {
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  