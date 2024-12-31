<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <!-- Login Card -->
      <div
        class="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-500 hover:scale-105"
      >
        <h1 class="text-3xl font-bold text-center mb-6">Sign In</h1>
        <form @submit.prevent="handleLogin">
          <!-- Email Input -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium">Email Address</label>
            <input
              id="email"
              type="email"
              v-model="email"
              required
              class="w-full mt-2 p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>
  
          <!-- Password Input -->
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              v-model="password"
              required
              class="w-full mt-2 p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>
  
          <!-- Login Button -->
          <button
            type="submit"
            class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-300 transform hover:translate-y-1 hover:shadow-md"
          >
            Sign In
          </button>
        </form>
  
        <!-- Footer Links -->
        <div class="flex justify-between items-center mt-4 text-sm">
          <a href="#" class="text-gray-400 hover:underline">Forgot password?</a>
          <router-link to="/register" class="text-gray-400 hover:underline">New to Netflix? Sign up now</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        console.log("Login:", this.email, this.password);
        if (!this.email || !this.password) {
          alert("Please enter your email and password.");
          return;
        }else {
          this.$router.push("/");
        }
      },
    },
  };
  </script>
  