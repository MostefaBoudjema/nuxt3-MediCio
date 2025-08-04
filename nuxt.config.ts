// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    // components: [{ path: '~/components/shared', pathPrefix: false }],
    devtools: { enabled: true },

    plugins: ['~/plugins/bootstrap.client.ts'],
    css: [
        // 'bootstrap/dist/css/bootstrap.min.css',
        'bootstrap-icons/font/bootstrap-icons.css',
    ],
    app: {
        head: {
            title: 'MEDICIO',
            link: [
                { rel: 'icon', type: 'image/png', href: '/img/favicon.png' },
            ],
        },
    },
});
