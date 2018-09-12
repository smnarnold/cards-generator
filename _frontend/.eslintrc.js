/**
 * .eslintrc.js
 * ============
 *
 * Rule configuration:
 * - "off" or 0 - turn the rule off
 * - "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
 * - "error" or "error - turn the rule on as an error (exit code will be 1)
 */

module.exports = {
  'extends': [
    'eslint:recommended',
    'eslint-config-google',
  ],
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'globals': {
    '$': true,
    'initClasses': true,
  },
  'parserOptions': {
    'ecmaVersion': 2015,
    'sourceType': 'module',
  },
  'rules': {
    'indent': [
      'error', 2, {
        'CallExpression': {
          'arguments': 2,
        },
        'FunctionDeclaration': {
          'body': 1,
          'parameters': 2,
        },
        'FunctionExpression': {
          'body': 1,
          'parameters': 2,
        },
        'MemberExpression': 1,
        'ObjectExpression': 1,
        'SwitchCase': 1,
        'ignoredNodes': [
          'ConditionalExpression',
        ],
      },
    ],
    'max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      tabWidth: 2,
    }],
    'no-cond-assign': 'error',
    'no-console': 'off',
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': 'off',
  },
};
