import eslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import globals from "globals";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            }
        }
    },
    {
        ignores: [
            '**/dist/**',
            '.eslintrc.js',
            'package.json',
            'package-lock.json',
            'tsconfig.json',
            '**/public/**',
            '**/*.css',
            '**/*.md',
        ],
    },

    // Configuration for JavaScript and TypeScript files
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: reactPlugin,
            prettier,
        },
        settings: {
            react: {
		//https://github.com/vercel/next.js/issues/89764
                version: '19',
            },
        },
        rules: {
            // ESLint recommended rules
            ...eslint.configs.recommended.rules,

            // Prettier recommended rules
            ...prettier.configs.recommended.rules,

            // React-specific rules
            ...reactPlugin.configs.recommended.rules,
            ...reactPlugin.configs['jsx-runtime'].rules,

            // Your custom rules
            'no-nested-ternary': 'error',
            'no-else-return': 'error',
            'no-param-reassign': 'error',
            'prefer-destructuring': 'error',
            'prefer-template': 'error',
            'no-lonely-if': 'error',
            'import/no-named-as-default-member': 'off',
            'import/no-named-as-default': 'off',
            'react/no-unescaped-entities': 'off'
        },
    },

    // TypeScript-specific configuration
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: ['./tsconfig.json', './**/tsconfig.json'],
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': ts,
        },
        rules: {
            // TypeScript recommended rules
            ...ts.configs.recommended.rules,
            ...ts.configs.strict.rules,

            // Your TypeScript-specific rules
            '@typescript-eslint/return-await': 'error',
            '@typescript-eslint/default-param-last': 'error',
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/strict-boolean-expressions': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],

            // disable prop-types rule for TypeScript files
            "react/prop-types": 0,

            // Include your general custom rules
            'no-nested-ternary': 'error',
            'no-else-return': 'error',
            'no-param-reassign': 'error',
            'prefer-destructuring': 'error',
            'prefer-template': 'error',
            'no-lonely-if': 'error',
            'import/no-named-as-default-member': 'off',
            'import/no-named-as-default': 'off',
        },
    },
];
