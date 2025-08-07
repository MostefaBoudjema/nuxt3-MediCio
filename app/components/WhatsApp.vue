<template>
	<a id="whatsapp" class="mx-2" :href="`https://api.whatsapp.com/send?phone=${whatsappNumber}`" data-aos="fade-up"
		data-aos-delay="200">
		<img :src="whatsappImag" class="my-4" alt="Icon" />
	</a>
</template>

<script setup>
const whatsappNumber="213793663310"; // Replace with your WhatsApp number
const whatsappImag="/img/whatsapp.svg"; // Replace with your WhatsApp image path


</script>


<style scoped >
#whatsapp {
	z-index: 99;
	position: fixed;
	width: 10vh;
	bottom: -7px;
	left: 7px;
}

img {
	width: 90px;
}

@media (max-width: 991px) {
	#whatsapp {
		bottom: -20px;
		left: 15px;
	}
	img {
		width: 95px;
	}
}
</style>