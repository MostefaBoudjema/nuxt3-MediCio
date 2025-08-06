// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        [
            '@nuxtjs/i18n',
            {
                locales: [
                    {
                        code: 'en',
                        iso: 'en-US',
                        file: 'en.json',
                        name: 'English',
                    },
                    {
                        code: 'ar',
                        iso: 'ar-DZ',
                        file: 'ar.json',
                        name: 'العربية',
                    },
                ],
                defaultLocale: 'ar',
                strategy: 'prefix_except_default',
                lazy: true,
                langDir: 'locales/',
                vueI18n: './locales/vue-i18n.options.js',
                detectBrowserLanguage: false, // disables i18n_redirected cookie and redirect
            },
        ],
    ],
    // plugins: ['~/plugins/bootstrap.client.ts', '~/plugins/aos.client.js'],
    plugins: ['~/plugins/bootstrap.client.ts', '~/plugins/aos.client.js'],
    css: [
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
