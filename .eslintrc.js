const { error } = require('console')

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'simple-import-sort/imports': 'off',
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'no-console': 'off',
  },
}
