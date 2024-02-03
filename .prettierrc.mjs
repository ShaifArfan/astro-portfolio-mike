// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  endOfLine: 'auto',
};
