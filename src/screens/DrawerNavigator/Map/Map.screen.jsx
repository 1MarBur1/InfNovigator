import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

//icons
import Pencil from 'react-native-vector-icons/MaterialCommunityIcons';
import Place from 'react-native-vector-icons/MaterialIcons';
import Menu from 'react-native-vector-icons/Entypo';

//styles
import styles from './Map.styles';

//nav
import { useNavigation } from '@react-navigation/native';

const Map = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>

			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				region={{
					latitude: 56.833332,
					longitude: 60.583332,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				}} />

			<TouchableOpacity style={styles.menu} onPress={() => navigation.openDrawer()}>
				<Menu
					name='menu'
					size={26}
					color='#000000' />
			</TouchableOpacity>

			<View style={styles.panel}>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('root/myWay')}>
					<View style = {{ marginTop: 4 }}>
						<Pencil
							name='pencil'
							size={40}
							color='#000000'	/>
					</View>
					<Text style = {styles.text}>Мой маршрут</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('root/preparedWay')}>
					<View style={{ marginTop: 4 }}>
						<Place
							name='location-on'
							size={40}
							color='#000000' />
					</View>
					<Text style={[styles.text, { marginTop: 1 }]}>Готовый маршрут</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
};

export default Map;
