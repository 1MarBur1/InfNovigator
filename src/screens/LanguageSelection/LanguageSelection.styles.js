import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#ffffff',
		alignItems: 'center',
	},
	headingText: {
		width: 240,
		fontSize: 36,
		fontFamily: 'Comfortaa-Regular',
		textAlign: 'center',
		marginTop: 184,
	},
	buttonContainer: {
		width: '100%',
		justifyContent: 'space-between',
		marginTop: 130,
		flexDirection: 'row',
		paddingHorizontal: 50,
	},
});

export default styles;
