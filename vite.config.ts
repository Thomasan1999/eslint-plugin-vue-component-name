import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [
        eslintPlugin(),
        vue()
    ]
});
