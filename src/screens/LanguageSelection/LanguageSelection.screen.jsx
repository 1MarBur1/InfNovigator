import React from 'react';
import { Text, View } from 'react-native';

//styles
import styles from './LanguageSelection.styles';

//components
import { CustomButton } from '../../components';

const Languages = () => {
	return (
		<View style = {styles.container}>
			<Text style={styles.headingText}>LANGUAGE ЯЗЫК</Text>

			<View style={styles.buttonContainer}>
				<CustomButton header='EN' />
				<CustomButton header='RU' />
			</View>

		</View>
	);

};

export default Languages;
