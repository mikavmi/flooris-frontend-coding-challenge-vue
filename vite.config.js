import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslintPlugin({
      fix: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src/js'),
      },
    ],
  },
});
