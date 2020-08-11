import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

//components
import Category from '../../components/Category/Category';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//styles
import styles from './PreparedWay.styles';

const PreparedWay = () =>{
	return (
		<View style = {styles.container}>
			<View style={styles.headerContainer}>
				<TouchableOpacity>
					<Ionicons
						name='arrow-back-outline'
						size={30}
						color='#000000' />
				</TouchableOpacity>

				<Text style={styles.headerText}>Можете выбрать существующие маршруты</Text>
			</View>

			<Category
				header='Маршруты по категориям'
				style = {styles.categoryContainer} />
		</View>
	);
};

export default PreparedWay;
