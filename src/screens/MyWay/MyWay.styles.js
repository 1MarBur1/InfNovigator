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
		height: 30,
	},
	headerText: {
		fontFamily: 'Comfortaa-Regular',
		fontSize: 18,
		marginLeft: 21,
	},
	categoryContainer: {
		marginTop: 15,
		alignSelf: 'center',
	},
	imageHeader: {
		marginTop: 50,
		alignSelf: 'center',
		fontFamily: 'Comfortaa-Regular',
		fontSize: 18,
	},
	imageContainer: {
		paddingHorizontal: 40,
		alignItems: 'center',
	},
	imageText: {
		width: 95,
		fontSize: 12,
		fontFamily: 'Comfortaa-Regular',
		textAlign: 'center',
		marginTop: 12,
	},
	go: {
		width: 186,
		height: 50,
		borderRadius: 10,
		backgroundColor: '#ffffff',
		elevation: 1,
		left: 95,
		top: 728,
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 15,
	},
	raw: {
		marginTop: 22,
		flexDirection: 'row',
	},
});

export default styles;
