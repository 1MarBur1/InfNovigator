import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

//components
import Category from '../../components/Category/Category';

//styles
import styles from './MyWay.styles';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyWay = () => {
	return (
		<View style={styles.container} >
			<View style = {styles.headerContainer}>
				<TouchableOpacity>
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
						<Image source={require('./gostin.png')} style={styles.image} />
						<Text style={styles.imageText} >Центральная гостиница</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./dom.png')} style={styles.image} />
						<Text style={styles.imageText} >Дом контор</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./kamnerez.webp')} style={styles.image} />
						<Text style={styles.imageText} >Музей камнерезного и ювелирного исскуства</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./xram.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Храм на крови</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./narodnogo.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Музей народного исскуства</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./pamyat.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Памятник Василию Татищеву и Вильгельму де Геннину </Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./1905.png')} style={styles.image} />
						<Text style={styles.imageText} >Площадь 1905 года</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./plotinka.png')} style={styles.image} />
						<Text style={styles.imageText} >Плотинка</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./visoctskiy.png')} style={styles.image} />
						<Text style={styles.imageText} >Высоцкий</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./vodonapornaya.png')} style={styles.image} />
						<Text style={styles.imageText} >Водонапорная башня</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./TheBeatles.png')} style={styles.image} />
						<Text style={styles.imageText} >Памятник группе The Beatles</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./kvartal.png')} style={styles.image} />
						<Text style={styles.imageText} >Литературный квартал</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./molodezhnaya.png')} style={styles.image} />
						<Text style={styles.imageText} >Молодёжная набережная</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./radio.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Музей радио</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./vaynera.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Улица Вайнера</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./XramKolokol.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Храм колокольня Большой златоуст</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./alleya.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Аллея исскуства</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./biblia.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Здание первой в библеотеки</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./domKyptsa.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом Купца Чувильдина</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./domMetnikova.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом Метникова</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./domMyzey.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом музей Мамина-Сибиряка</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./domOboroni.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом Обороны</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./domSevastyanova.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Дом Севастьянова</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./eltsin.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Ельин центр</Text>
					</View>
				</View>

				<View style={styles.raw}>PreparedWay
					<View style={styles.imageContainer}>
						<Image source={require('./fontan.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Фонтан на Драмме </Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./gimnazia.jpg')} style={styles.image} />
						<Text style={styles.imageText} >9 Гимназия</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./history.jpg')} style={styles.image} />
						<Text style={[styles.imageText, { width: 110 }]} >Музей истории Екатеринбурга</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./klava.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Памятник клавиатуре</Text>
					</View>
				</View>

				<View style={styles.raw}>
					<View style={styles.imageContainer}>
						<Image source={require('./Kler.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Музей Клера</Text>
					</View>

					<View style={styles.imageContainer}>
						<Image source={require('./medecini.jpg')} style={styles.image} />
						<Text style={styles.imageText} >Музей истории медицины</Text>
					</View>
				</View>

				<View style={styles.go} />
			</ScrollView>

		</View>

	);
};

export default MyWay;
