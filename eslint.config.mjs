import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("plugin:vue/vue3-recommended", "prettier"),
    ...vueTsEslintConfig(),
    {
        plugins: {
            vue,
            prettier,
            "simple-import-sort": simpleImportSort,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            ecmaVersion: "latest",
            sourceType: "module",
        },

        rules: {
            "prettier/prettier": "error",
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    },
];
