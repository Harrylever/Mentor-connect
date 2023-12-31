module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/button-has-type': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'linebreak-style': ['error', 'windows'],
  },
};
