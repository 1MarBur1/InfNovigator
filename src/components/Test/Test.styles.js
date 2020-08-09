import { StyleSheet, AccessibilityInfo } from 'react-native';
import { Colors } from 'theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#FFFFFF',
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
		fontSize: 12,
		fontFamily: 'Comfortaa-Regular',
		color: '#858585',
	},
	containerText: {
		position: 'absolute',
		bottom: 40,
	},
});

export default styles;
