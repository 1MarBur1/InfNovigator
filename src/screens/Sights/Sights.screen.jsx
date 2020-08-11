import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//styles
import styles from './Sights.styles';

//nav
import { useNavigation } from '@react-navigation/native';

const Sights = () => {
	const navigation = useNavigation();
	return (
		<View style = {styles.container}>

			<TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('root/languages')}>
				<Ionicons
					name='arrow-back-outline'
					size={30}
					color='#000000' />
			</TouchableOpacity>

			<Text style={styles.headingText}>Ознакомьтесь с информацией на сайте</Text>
			<Image
				source={require('./qr.png')}
				style = {styles.image} />

		</View>
	);
};

export default Sights;
