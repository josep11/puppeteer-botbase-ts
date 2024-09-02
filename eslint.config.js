const FlatCompat = require("@eslint/eslintrc").FlatCompat;
const js = require("@eslint/js");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const prettier = require("eslint-plugin-prettier");
const globals = require("globals");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = [{
    ignores: [
        "**/node_modules/",
        "**/playground.js",
        "**/build-cdn/",
        "**/jest.config.js",
        "**/jest.config.ts",
        "**/eslint.config.js",
    ],
}, ...compat.extends("eslint:recommended"), {
    plugins: {
        prettier,
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
            ...globals.commonjs,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 12,
        sourceType: "commonjs",

        parserOptions: {
            project: "./tsconfig.dev.json",
        },
    },
    files: [
        "**/*.js",
        "**/*.ts",
    ],
    rules: {
        "prettier/prettier": ["warn"],
        "require-await": "error",
        "no-unreachable": "off",
        "@typescript-eslint/no-floating-promises": ["error"],
        "lines-between-class-members": [1, "always"],
        "comma-dangle": 0,

        "padded-blocks": ["off", {
            classes: "always",
        }],
    },
}];
