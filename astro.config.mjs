// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jrebollo.dev',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es', 'pt'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});

