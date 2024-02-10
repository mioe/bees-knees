module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'@unocss',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			rules: {
				'no-unused-vars': 'off',
				'no-undef': 'off',
				'vue/multi-word-component-names': 'off',
				'vue/require-default-prop': 'off',
				'vue/html-indent': ['error', 'tab', {
					attribute: 1,
					baseIndent: 1,
					closeBracket: 0,
					alignAttributesVertically: true,
					ignores: [],
				}],
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: [
		'@stylistic',
		'@typescript-eslint',
		'vue',
	],
	ignorePatterns: [
		'*.min.*',
		'CHANGELOG.md',
		'dist',
		'LICENSE*',
		'output',
		'coverage',
		'public',
		'temp',
		'packages-lock.json',
		'pnpm-lock.yaml',
		'yarn.lock',
		'__snapshots__',
		'!.github',
		'!.vitepress',
		'!.vscode',
	],
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@stylistic/comma-dangle': ['error', 'always-multiline'],
		'@stylistic/indent': ['error', 'tab'],
		'@stylistic/quote-props': ['error', 'as-needed'],
		'@stylistic/quotes': ['error', 'single'],
		'@stylistic/semi': ['error', 'never'],
		'@stylistic/space-before-function-paren': ['error', 'never'],
	},
}
