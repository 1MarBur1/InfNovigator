import React, { useState } from 'react';
import { Text, View } from 'react-native';

// styles
import styles from './Test.styles';

const Navigator = () => {
	return (
		<View style = {styles.container}>
			<Text style = {styles.headingText}>ИНФОРМАЦИОННЫЙ СТЕНД</Text>

			<View style={styles.containerText}>
				<Text style={styles.text}>нажмите, чтобы начать</Text>
			</View>

		</View>
	);
};
export default Navigator;
