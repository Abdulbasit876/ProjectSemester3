<template>
  <div class="bg-black text-white min-h-screen">
    <section
      class="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style="background-image: url('https://source.unsplash.com/1600x900/?movie');"
    >
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      <div class="z-10 text-center px-4">
        <h1
          class="text-4xl md:text-6xl font-bold animate-fadeInUp"
          :class="{ 'animate-bounce': isHovered }"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
        >
          Watch Your Favorites
        </h1>
        <p class="mt-4 text-lg md:text-xl">
          Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
        </p>
        <button
          class="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-lg transition duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="mt-8 px-4 md:px-8">
      <div v-for="(category, index) in categories" :key="index" class="mb-8">
        <h2 class="text-2xl font-bold mb-4">{{ category.title }}</h2>
        <div class="flex space-x-4 overflow-x-auto no-scrollbar">
          <div
            v-for="(movie, idx) in category.movies"
            :key="idx"
            class="w-60 flex-shrink-0 rounded-lg bg-cover bg-center shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
            :style="{ backgroundImage: `url(${movie.image})` }"
          >
            <div class="bg-black bg-opacity-40 p-2 rounded-b-lg">
              <p class="text-sm">{{ movie.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  data() {
    return {
      isHovered: false,
      categories: [
        {
          title: "Trending Now",
          movies: [
            { title: "Movie 1", image: "https://source.unsplash.com/200x300/?movie" },
            { title: "Movie 2", image: "https://source.unsplash.com/200x300/?cinema" },
            { title: "Movie 3", image: "https://source.unsplash.com/200x300/?action" },
          ],
        },
        {
          title: "Top Picks for You",
          movies: [
            { title: "Movie 4", image: "https://source.unsplash.com/200x300/?drama" },
            { title: "Movie 5", image: "https://source.unsplash.com/200x300/?thriller" },
            { title: "Movie 6", image: "https://source.unsplash.com/200x300/?adventure" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add TailwindCSS animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
}

/* Hide scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
