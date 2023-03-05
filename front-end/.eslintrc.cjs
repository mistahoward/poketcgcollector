module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['react', '@typescript-eslint'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'@typescript-eslint/semi': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
		'react/jsx-indent': ['error', 'tab'],
		'comma-dangle': 'off',
		'linebreak-style': 'off',
		'react/jsx-indent-props': ['error', 'tab'],
		'react/require-default-props': 'off',
		'react/function-component-definition': [2, { "namedComponents": "arrow-function" }],
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
	},
};
