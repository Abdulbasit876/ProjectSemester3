<template>
    <div class="min-h-screen bg-gray-900 flex items-center justify-center">
        <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 class="text-2xl text-white mb-4">Upload Your Video</h1>
            <form @submit.prevent="uploadVideo">
                <div class="mb-4">
                    <label class="block text-gray-400 mb-2" for="video">Select Video</label>
                    <input
                        type="file"
                        id="video"
                        @change="handleFileChange"
                        class="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-400 mb-2" for="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        v-model="title"
                        class="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Upload
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoUploader',
    components: {},
    props: {},
    data() {
        return {
            videoFile: null,
            title: ''
        };
    },
    methods: {
        handleFileChange(event) {
            this.videoFile = event.target.files[0];
        },
        uploadVideo() {
            if (!this.videoFile || !this.title) {
                alert('Please select a video and enter a title.');
                return;
            }
            console.log('Uploading video:', this.videoFile, 'with title:', this.title);
        }
    }
};
</script>

<style scoped>
body {
    @apply bg-gray-900;
}
</style>