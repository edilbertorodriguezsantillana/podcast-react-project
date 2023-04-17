module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
	},
	plugins: ['react'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
	},
};
