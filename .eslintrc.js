module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    semi: 'off',
    'arrow-parens': 'off',
    'object-shorthand': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/order-in-components': 'off',
    'vue/attributes-order': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/valid-template-root': 'off',
    // 'vue/html-indent': 'off',
    'no-lonely-if': 'off',
    'spaced-comment': 'off',
    'no-multiple-empty-lines': 'off',
    'padded-blocks': 'off',
    'comma-dangle': 'off',
    quotes: 'off',
    indent: 'off',
    'space-before-function-paren': 'off',
    'key-spacing': 'off',
    'object-curly-spacing': 'off',
    'prefer-const': 'off',
    "no-warning-comments": [0, {terms: ["todo", "fixme", "xxx"], location: "start"}],
    "--client-log-level": 'off'
  }
}
