module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: '',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: '',
  globals: {
    React: true
  }
}
