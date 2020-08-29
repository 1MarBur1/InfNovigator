import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#ffffff',
	},
	headerContainer: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		marginLeft: 10,
		marginTop: 19,
		height: 40,
	},
	headerText: {
		fontFamily: 'Comfortaa-Regular',
		fontSize: 18,
		width: 300,
		height: 50,
		textAlign: 'center',
	},
	categoryContainer: {
		marginTop: 40,
		alignSelf: 'center',
	},
	header: {
		fontFamily: 'Comfortaa-Regular',
		fontSize: 15,
		alignSelf: 'center',
		marginTop: 50,
		height: 32,
	},
	button: {
		width: 160,
		height: 20,
		borderRadius: 20,
		backgroundColor: '#E9F3FD',
		marginTop: 20,
		alignSelf: 'center',
		elevation: 1,
	},
	buttonText: {
		fontFamily: 'Comfortaa-Regular',
		fontSize: 12,
		alignSelf: 'center',
	},
	text: {
		fontFamily: 'Comfortaa-Regular',
		fontSize: 10,
		alignSelf: 'center',
		textAlign: 'center',
		marginTop: 20,
		color: '#858585',
		width: 270,
	},
});

export default styles;
