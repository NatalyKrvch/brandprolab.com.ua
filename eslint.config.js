import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),

  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: eslintParserTypescript,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      tailwindcss: eslintPluginTailwindcss,
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'eslint-comments': eslintPluginEslintComments,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: {}, node: { paths: ['src'] } },
      tailwindcss: { callees: ['cn', 'clsx'] },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'tailwindcss/no-custom-classname': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'no-warning-comments': [
        'warn',
        { terms: ['TODO', 'FIXME', 'BUG', 'HACK'], location: 'anywhere' },
      ],
      'eslint-comments/no-unused-disable': 'warn',
    },
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
