<!-- components/ScrollToTop.vue -->
<template>
    <button v-show="visible" class="scroll-top" @click="scrollToTop" aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V4.707l3.147 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 4.707V11.5A.5.5 0 0 0 8 12z" />
        </svg>
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible=ref(false);

const handleScroll=() => {
    visible.value=window.scrollY>300; // Show after scrolling 300px
};

const scrollToTop=() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial check in case page is already scrolled
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-top {
    position: fixed;
    right: 24px;
    bottom: 32px;
    z-index: 1000;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-top:hover {
    background: #0056b3;
    transform: translateY(-2px);
}

.scroll-top:active {
    transform: translateY(0);
}
</style>