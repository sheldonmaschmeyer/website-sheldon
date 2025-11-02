import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";
import prettierConfig from "eslint-config-prettier";

export default [
    js.configs.recommended,
    ...vue.configs["flat/recommended"],
    prettierConfig,
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: typescriptParser,
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
    },
    {
        plugins: {
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
