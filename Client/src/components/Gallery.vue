<template>
    <div class="p-4">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(video, index) in videos"
          :key="index"
          @click="playVideo(video)"
          class="group relative overflow-hidden rounded-lg cursor-pointer transform transition duration-300 hover:scale-105">
          <img
            :src="video.thumbnail"
            alt="Video Thumbnail"
            class="object-cover w-full h-48 transition duration-500 group-hover:brightness-50">
          <div
            class="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
            Play
          </div>
        </div>
      </div>
  
      <div
        v-if="activeVideo"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
        <div class="relative max-w-4xl w-full">
          <video
            :src="activeVideo.url"
            controls
            autoplay
            class="w-full rounded-lg">
          </video>
          <button
            @click="closeVideo"
            class="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"Gallery",
    data() {
      return {
        videos: [
          {
            thumbnail: "https://via.placeholder.com/400x300",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
          },
          {
            thumbnail: "https://via.placeholder.com/400x300",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
          },
          {
            thumbnail: "https://via.placeholder.com/400x300",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
          },
          {
            thumbnail: "https://via.placeholder.com/400x300",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
          },
        ],
        activeVideo: null,
      };
    },
    methods: {
      playVideo(video) {
        this.activeVideo = video;
      },
      closeVideo() {
        this.activeVideo = null;
      },
    },
  };
  </script>
  
  <style>
  body {
    overflow: hidden;
  }
  </style>
  