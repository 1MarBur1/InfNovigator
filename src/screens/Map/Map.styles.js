import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	panel: {
		width: '100%',
		height: 90,
		borderRadius: 10,
		backgroundColor: 'red',
		bottom: -10,
	},
});

export default styles;
