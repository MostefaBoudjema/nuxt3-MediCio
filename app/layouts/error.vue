<!-- layouts/error.vue -->
<template>
	<div class="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gray-100 text-gray-800">
	  <h1 class="text-6xl font-bold text-red-600">{{ error.statusCode }}</h1>
	  <p class="text-2xl mt-4">
		{{ error.statusCode === 404 ? 'Page not found' : 'An error occurred' }}
	  </p>
	  <NuxtLink to="/" class="mt-6 text-blue-500 underline">Go back home</NuxtLink>
	</div>
  </template>
  
  <script setup>
  defineProps(['error'])
  </script>
  