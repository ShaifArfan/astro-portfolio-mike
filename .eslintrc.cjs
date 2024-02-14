module.exports = {
  plugins: ['@typescript-eslint', 'tailwindcss'],
  extends: [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {},
  ignorePatterns: ['.astro', 'dist', 'node_modules'],
  overrides: [
    {
      files: ['.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
};
