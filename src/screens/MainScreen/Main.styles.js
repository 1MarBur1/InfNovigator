import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headingText: {
		fontSize: 25,
		fontFamily: 'Comfortaa-Regular',
		alignSelf: 'center',
		textAlign: 'center',
	},
	text: {
		fontSize: 15,
		fontFamily: 'Comfortaa-Regular',
		color: '#858585',
	},
	containerText: {
		position: 'absolute',
		bottom: 50,
	},
});

export default styles;
