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
          <div class="mb-4 ">
            <label for="password" class="block text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              @input="checkPasswordStrength"
              v-model="password"
              required
              class="w-full mt-2 p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
           <div class="flex justify-between items-center mt-2" >
            <p v-if="password" class="text-xs font-bold text-gray-400"> Strength: <span :class="strengthClass">{{ strengthValue }}</span></p>
            <div @click="generatePassword" class="text-xs font-bold cursor-pointer  text-white bg-red-600 p-1 rounded-lg ml-[auto]" >Generate Password</div>
           </div>
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
  import generator from  'generate-password-browser';
  import {passwordStrength} from "check-password-strength"
  export default {
    name: "Register",
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
        strengthValue: "",
      };
    },
    methods: {
      handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }else{
          this.$router.push("/login");
        }
        // Registration logic goes here
        console.log("Registered:", this.email, this.password);
      },
      checkPasswordStrength() {
        const strength = passwordStrength(this.password);
        this.strengthValue = strength.value;
      },
      generatePassword() {
      console.log("Called generatePassword")
        this.password = generator.generate({
          length: 20,
          numbers: true,
          symbols: true,
          lowercase: true,
          uppercase: true,
        });
        console.log(this.password)
        this.checkPasswordStrength();
        this.confirmPassword = this.password;
      }
    },
    computed:{
      strengthClass() {
      switch (this.strengthValue) {
        case "Too Weak":
          return "text-red-500 font-bold";
        case "Weak":
          return "text-yellow-500 font-bold";
        case "Medium":
          return "text-blue-500 font-bold";
        case "Strong":
          return "text-green-500 font-bold";
        default:
          return "";
      }
    }
    }
  };
  </script>