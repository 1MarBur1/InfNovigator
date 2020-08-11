import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// styles
import styles from './Main.styles';

//components
import { CustomButton } from '../../components';
import { NavigationContainer } from '@react-navigation/native';

//nav
import { useNavigation } from '@react-navigation/native';

const Navigator = () => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate('root/languages')}
		>

			<Text style={styles.headingText}>ИНФОРМАЦИОННЫЙ СТЕНД</Text>

			<View style={styles.containerText}>
				<Text style={styles.text}>нажмите, чтобы начать</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Navigator;
