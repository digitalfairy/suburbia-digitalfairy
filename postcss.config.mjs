// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // Add the content array here
      content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // Existing path
        "./src/slices/**/*.{js,ts,jsx,tsx,mdx}", // The new path you need to add
      ],
    },
    "autoprefixer": {},
  },
};

export default config;