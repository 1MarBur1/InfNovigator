import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		alignItems: 'center',
	},
	map: {
		height: '100%',
		width: '100%',
	},
	panel: {
		width: '100%',
		height: 80,
		borderRadius: 10,
		backgroundColor: '#ffffff',
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
	},
	button: {
		flex: 1,
		height: 90,
		alignItems: 'center',
	},
	text: {
		fontSize: 14,
		fontFamily: 'Comfortaa-Regular',
		color: '#000000',
	},
	menu: {
		backgroundColor: '#ffffff',
		width: 40,
		height: 40,
		borderRadius: 10,
		position: 'absolute',
		top: 16,
		left: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;
