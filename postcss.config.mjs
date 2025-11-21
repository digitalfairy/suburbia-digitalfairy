import postcssNesting from 'postcss-nesting'; 

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-nesting': postcssNesting, 
    'tailwindcss': {},
  },
};

export default config;