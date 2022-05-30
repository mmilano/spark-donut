module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: ["plugin:vue/essential", "@vue/standard"],
    parserOptions: {
        ecmaVersion: 2020,
        parser: "@babel/eslint-parser",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        quotes: ["warn", "double", { allowTemplateLiterals: true }],
        "comma-dangle": [
            "warn",
            {
                arrays: "never",
                objects: "always",
                imports: "never",
                exports: "never",
                functions: "never",
            },
        ],
        semi: ["error", "always"],
        "no-multiple-empty-lines": ["error", { max: 3 }],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                named: "never",
                asyncArrow: "never",
            },
        ],
    },
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
            env: {
                jest: true,
            },
        },
    ],
};
