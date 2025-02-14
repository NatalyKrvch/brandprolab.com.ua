import eslintPluginNext from '@next/eslint-plugin-next';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: eslintParserTypescript,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      prettier: eslintPluginPrettier,
      tailwindcss: eslintPluginTailwindcss,
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      '@next/next': eslintPluginNext,
      'eslint-comments': eslintPluginEslintComments,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
        node: {
          paths: ['src'],
        },
      },
      tailwindcss: {
        callees: ['cn', 'clsx', 'classnames'],
      },
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      '@next/next/no-html-link-for-pages': 'off',
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
  eslintConfigPrettier,
];
