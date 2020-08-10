import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#ffffff',
		alignItems: 'center',
	},

	headingText: {
		fontSize: 28,
		width: 241,
		fontFamily: 'Comfortaa-Light',
		textAlign: 'center',
		marginTop: 150,
	},
	touchContainer: {
		position: 'absolute',
		left: 10,
		top: 48,
		width: 50,
		height: 50,
	},
	image: {
		width: 261,
		height: 252,
		marginTop: 60,
	},
});

export default styles;
