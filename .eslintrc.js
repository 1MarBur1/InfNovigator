module.exports = {
	root: true,
	extends: [
		'@react-native-community',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['import', '@typescript-eslint'],
	rules: {
		//style
		'prettier/prettier': 0, // disable that monster

		'max-len': [2, { 'code': 130, 'ignoreComments': true }],
		'indent': [2, 'tab', {
			'SwitchCase': 1,
			'ArrayExpression': 1,
			'ObjectExpression': 1,
			'ImportDeclaration': 1,
		}],
		'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
		'semi': [2, 'always'],
		'semi-style': [2, 'last'],
		'semi-spacing': [2, { 'before': false, 'after': true }],
		'quotes': [2, 'single'],
		'comma-dangle': [2, 'always-multiline'],
		'arrow-parens': [2, 'always'],
		'linebreak-style': [2, 'unix'],
		'eol-last': [2, 'always'],
		'no-multiple-empty-lines': [2, { 'max': 1 }],
		'curly': [2, 'multi-or-nest'],
		'brace-style': [2, 'stroustrup'],
		'object-curly-spacing': [2, 'always'],
		'array-bracket-spacing': [2, 'never'],
		'space-in-parens': [2, 'never'],
		'comma-spacing': [2, { 'before': false, 'after': true }],
		'no-multi-spaces': 2,
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],

		//semantics
		'no-console': 1,
		'radix': [2, 'as-needed'],
		'handle-callback-err': 0,

		//jsx
		'jsx-quotes': [2, 'prefer-single'],
		'react/jsx-closing-bracket-location': [2, { selfClosing: 'after-props', nonEmpty: 'tag-aligned' }],
		'react/jsx-max-props-per-line': [2, { 'maximum': 1, 'when': 'multiline' }],
		'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
		'react/jsx-indent': [2, 'tab', { indentLogicalExpressions: true }], // { indentLogicalExpressions: true } still not works
		'react/jsx-key': 2,
		'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
		'react/jsx-wrap-multilines': [2, {
			declaration: 'parens-new-line',
			assignment: 'parens-new-line',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
		}],
		'react/jsx-pascal-case': [2, { allowAllCaps: true }],
		'react-native/no-inline-styles': 0,
		'@typescript-eslint/triple-slash-reference': 0,
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				alias: {

				},
			},
		},
	},
};

