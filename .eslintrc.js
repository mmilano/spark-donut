module.exports = {
    root: true,

    env: {
        node: true,
        browser: true,
    },

    parserOptions: {
        ecmaVersion: 2020,
    },

    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'vue/html-end-tags': 'error',
        'vue/html-quotes': 'error',
        'vue/no-v-html': 'error',
        'vue/no-unused-components': 'warn',
        'vue/no-unused-vars': 'warn',
        'vue/attribute-hyphenation': 'warn',
        'vue/html-closing-bracket-newline': 'warn',
        'vue/html-closing-bracket-spacing': 'warn',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/require-name-property': 'error',
    },

    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],

    extends: [
        "plugin:vue/essential",
        "eslint:recommended"
    ],

    'extends': [
      'plugin:vue/recommended',
      'eslint:recommended'
    ]
};
