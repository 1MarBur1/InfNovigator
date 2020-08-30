import React from 'react';

//screens
import Languages from '../LanguageSelection/LanguageSelection.screen';
import Sights from '../Sights/Sights.screen';
import Map from './Map/Map.screen';

//nav
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () =>(
	<Drawer.Navigator
		initialRouteName='drawer/map'
		drawerStyle={{
			width: 240,
		}}
	>
		<Drawer.Screen
			name='drawer/map'
			component={Map}
			options={{ swipeEnabled: false }} />

		<Drawer.Screen
			name='drawer/languages'
			component={Languages}
			options={{ drawerLabel: 'Выбрать язык' }} />

		<Drawer.Screen
			name='drawer/sights'
			component={Sights}
			options={{ drawerLabel: 'Информация о достопримечательностях' }} />

	</Drawer.Navigator>
);

export default DrawerNavigation;
