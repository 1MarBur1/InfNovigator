import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

//components
import Category from '../../components/Category/Category';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//styles
import styles from './PreparedWay.styles';

//nav
import { useNavigation } from '@react-navigation/native';

const PreparedWay = () =>{
	const navigation = useNavigation();

	return (
		<View style = {styles.container}>
			<View style={styles.headerContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('root/map')}>
					<Ionicons
						name='arrow-back-outline'
						size={31}
						color='#000000' />
				</TouchableOpacity>

				<Text style={styles.headerText}>Можете выбрать существующие маршруты</Text>
			</View>

			<Category
				header='Маршруты по категориям'
				style = {styles.categoryContainer} />

			<Text style = {styles.header}>Маршруты, построенные нами</Text>

			<TouchableOpacity style={styles.button}>
				<Text style = {styles.buttonText}>Большой круг</Text>
			</TouchableOpacity>
			<Text style={styles.text}>Маршрут включает в себя 30 незабываемых точек города Екатеринбурга</Text>
			<Text style={[styles.text, { marginTop: 5, fontFamily: 'Comfortaa-Bold' }]}>7680 метров</Text>

			<TouchableOpacity style={[styles.button, { marginTop: 30 }]}>
				<Text style={styles.buttonText}>Малый круг</Text>
			</TouchableOpacity>
			<Text style={styles.text}>Площадь 1905 года, Дом актера, Гигимназия №9,	Дом Севастьянова,
				Памятник Татищеву и де Генину, Храм на Крови, Здание первой библиотеки,
				Дом Метенкова, Центральная гостиница, Дом Чувильдина,
				Дом контор, Храм "большой златоуст", Дом обороны</Text>
			<Text style={[styles.text, { marginTop: 5, fontFamily: 'Comfortaa-Bold' }]}>5110метров</Text>

			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>История города</Text>
			</TouchableOpacity>
			<Text style={styles.text}>Площадь 1905 года, Дом актера, Гигимназия №9, Дом Севастьянова,
				Памятник Татищеву и де Генину, литературный квартал Храм на Крови,
				Музей истории Екатеринбурга , Здание первой библиотеки,
				Дом Метенкова,Областной музей медицины,Центральная гостиница, ,
				Дом контор, Храм "большой златоуст", Дом обороны.</Text>
			<Text style={[styles.text, { marginTop: 5, fontFamily: 'Comfortaa-Bold' }]}>4950 метров   </Text>
		</View>
	);
};

export default PreparedWay;
