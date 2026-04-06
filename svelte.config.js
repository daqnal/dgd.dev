import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	preprocess: [mdsvex({ extensions: [".md"] }), vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: { '$lib': './src/lib', '$lib/*': './src/lib/*' }
	}
};

export default config;
