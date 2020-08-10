import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// styles
import styles from './Main.styles';

//components
import { CustomButton } from '../../components';

const Navigator = () => {
	return (
		<TouchableOpacity
			style={styles.container}
		>
			<Text style={styles.headingText}>ИНФОРМАЦИОННЫЙ СТЕНД</Text>

			<CustomButton header='RU' />

			<View style={styles.containerText}>
				<Text style={styles.text}>нажмите, чтобы начать</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Navigator;
