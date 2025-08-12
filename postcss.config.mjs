// postcss.config.mjs
import fluid, { extract } from 'fluid-tailwind'

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // Use the content object with files and extract
      content: {
        files: [
          "./src/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        extract,
      },
      // Add the fluid plugin to your plugins array
      plugins: [
        fluid,
      ],
    },
    "autoprefixer": {},
  },
};

export default config;