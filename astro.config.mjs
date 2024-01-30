import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    plugins: [
        [
          '@snowpack/plugin-sass',
          {
            /* options */
          },
        ],
      ],
});
