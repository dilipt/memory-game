module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': [0, {}],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.tsx', '**/*.test.ts', '*.js'] }],
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
