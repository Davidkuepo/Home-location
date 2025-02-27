module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'linting-lightning'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/react-in-jsx-scope': 'off',
    "linting-lightning/rule-name": 2,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
};
