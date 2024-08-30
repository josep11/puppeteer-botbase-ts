import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules/",
        "**/playground.js",
        "**/build-cdn/",
        "**/jest.config.js",
        "**/jest.config.ts",
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
            project: "./tsconfig.base.json",
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