import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

//components
import Category from '../../components/Category/Category';

//styles
import styles from './MyWay.styles';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//nav
import { useNavigation } from '@react-navigation/native';

const MyWay = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container} >
			<View style = {styles.headerContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('root/map')}>
					<Ionicons
						name='arrow-back-outline'
						size={30}
						color='#000000' />
				</TouchableOpacity>

				<Text style={styles.headerText}>Соберите свой маршрут</Text>
			</View>

			<Category
				header= 'Выберите категорию'
				style = {styles.categoryContainer} />

			<Text style = {styles.imageHeader}>Все места:</Text>

			<ScrollView style = {{ marginTop: 10 }}>
				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/gostin.png')} style={styles.image} />
						<Text style={styles.imageText} >Центральная гостиница</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/dom.png')} style={styles.image} />
						<Text style={styles.imageText} >Дом контор</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/kamnerez.webp')} style={styles.image} />
						<Text style={styles.imageText} >Музей камнерезного и ювелирного исскуства</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/xram.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Храм на крови</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/narodnogo.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Музей народного исскуства</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/pamyat.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Памятник Василию Татищеву и Вильгельму де Геннину </Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/1905.png')} style={styles.image} />
						<Text style={styles.imageText} >Площадь 1905 года</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/plotinka.png')} style={styles.image} />
						<Text style={styles.imageText} >Плотинка</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/visoctskiy.png')} style={styles.image} />
						<Text style={styles.imageText} >Высоцкий</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/vodonapornaya.png')} style={styles.image} />
						<Text style={styles.imageText} >Водонапорная башня</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/TheBeatles.png')} style={styles.image} />
						<Text style={styles.imageText} >Памятник группе The Beatles</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/kvartal.png')} style={styles.image} />
						<Text style={styles.imageText} >Литературный квартал</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/molodezhnaya.png')} style={styles.image} />
						<Text style={styles.imageText} >Молодёжная набережная</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/radio.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Музей радио</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/vaynera.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Улица Вайнера</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/XramKolokol.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Храм колокольня Большой златоуст</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/alleya.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Аллея исскуства</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/biblia.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Здание первой в библеотеки</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/domKyptsa.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом Купца Чувильдина</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/domMetnikova.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом Метникова</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/domMyzey.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом музей Мамина-Сибиряка</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/domOboroni.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом Обороны</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/domSevastyanova.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом Севастьянова</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/eltsin.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Ельцин центр</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/fontan.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Фонтан на Драме</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/gimnazia.jpg')} style={styles.image} />
						<Text style={styles.imageText} >9 Гимназия</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/history.jpg')} style={styles.image} />
						<Text style={[styles.imageText, { width: 110 }]} >Музей истории Екатеринбурга</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/klava.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Памятник клавиатуре</Text>
					</View>

				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Images/Kler.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Музей Клера</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./Images/medecini.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Музей истории медицины</Text>
					</View>
				</View>

			</ScrollView>

		</View>

	);
};
export default MyWay;
