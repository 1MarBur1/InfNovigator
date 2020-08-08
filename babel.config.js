module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		'@babel/plugin-proposal-optional-chaining',
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: [
					'ios.ts',
					'android.ts',
					'ios.tsx',
					'android.tsx',
					'.ios.js',
					'.android.js',
					'.ios.jsx',
					'.android.jsx',
					'.ts',
					'.tsx',
					'.js',
					'.jsx',
					'.json',
				],
				alias: {

				},
			},
		],
	],
};

