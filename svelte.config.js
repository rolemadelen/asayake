import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-auto";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  preprocess: [vitePreprocess({}), preprocess({
    scss: {
      prependData: `@import './src/style/app.scss';`
    }
  })],
};

export default config;
