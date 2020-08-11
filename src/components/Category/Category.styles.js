import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: 355,
		backgroundColor: '#E9F3FD',
		borderRadius: 20,
		paddingHorizontal: 8,
		paddingBottom: 17,
	},
	text: {
		fontFamily: 'Comfortaa-Regular',
		fontSize: 15,
		alignSelf: 'center',
		marginTop: 17,
	},
	button: {
		width: 160,
		height: 20,
		borderRadius: 20,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 1,
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonText: {
		fontFamily: 'Comfortaa-Regular',
		fontSize: 12,
	},
});

export default styles;
