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
});

export default styles;
