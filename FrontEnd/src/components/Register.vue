<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div class="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg">
        <h1 class="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form @submit.prevent="handleRegister">
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
  
          <!-- Confirm Password Input -->
          <div class="mb-6">
            <label for="confirm-password" class="block text-sm font-medium">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              v-model="confirmPassword"
              required
              class="w-full mt-2 p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Confirm your password"
            />
          </div>
  
          <!-- Register Button -->
          <button
            type="submit"
            class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Register
          </button>
        </form>
  
        <!-- Footer -->
        <p class="text-sm text-center mt-6">
          Already have an account?
          <router-link to="/login" class="text-red-500 hover:underline">Sign in now</router-link>.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        // Registration logic goes here
        console.log("Registered:", this.email, this.password);
      },
    },
  };
  </script>