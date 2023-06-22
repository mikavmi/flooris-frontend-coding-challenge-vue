module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    globals: {
        axios: 'readonly',
        route: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    extends: ['airbnb-base', 'plugin:vue/vue3-recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
    ignorePatterns: ['vite.config.js', 'tailwind.config.js'],
    rules: {
        'prettier/prettier': ['error', { tabWidth: 4 }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                json: 'never',
                vue: 'never',
            },
        ],
        'prefer-destructuring': ['error', { object: true, array: false }],
        'no-param-reassign': 0,
        'no-unused-vars': 'error',
        'no-shadow': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
            },
            alias: {
                map: [['@', './src/js']],
            },
        },
    },
};
