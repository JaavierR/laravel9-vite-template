import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js/', import.meta.url)),
        },
    },

    plugins: [
        laravel(['resources/js/main.ts']),
        vue({
            reactivityTransform: true,
            template: {
                transformAssetUrls: { base: null, includeAbsolute: false },
            },
        }),
        eslintPlugin(),
    ],

    optimizeDeps: {
        include: ['vue', 'vue-router'],
    },
})
