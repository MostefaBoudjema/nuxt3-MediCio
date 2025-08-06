import { defineNuxtPlugin } from '#app'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  
  // if (process.client) {
    nuxtApp.hook('page:finish', () => {
      console.log('AOS Plugin Loaded');
      AOS.init({
        once: true,
        duration: 800,
      })
      AOS.refresh()
    })
  // }
})
