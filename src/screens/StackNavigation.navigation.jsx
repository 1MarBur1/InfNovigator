import React from 'react';

//screens
import Main from './Main/Main.screen';
import Languages from './LanguageSelection/LanguageSelection.screen';
import MyWay from './MyWay/MyWay.screen';
import Sights from './Sights/Sights.screen';
import PreparedWay from './PreparedWay/PreparedWay.screen';

//navigators
import DrawerNavigation from './DrawerNavigator/DrawerNavigation.navigation';

//nav
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigation = () => (
	<Stack.Navigator initialRouteName='root/main'>

		<Stack.Screen
			name='root/main'
			component={Main}
			options={{
				headerShown: false,
			}} />

		<Stack.Screen
			name='root/languages'
			component={Languages}
			options={{
				headerShown: false,
			}} />

		<Stack.Screen
			name='root/sights'
			component={Sights}
			options={{
				headerShown: false,
			}} />

		<Stack.Screen
			name='root/myWay'
			component={MyWay}
			options={{
				headerShown: false,
			}} />

		<Stack.Screen
			name='root/map'
			component={DrawerNavigation}
			options={{
				headerShown: false,
			}} />

		<Stack.Screen
			name='root/preparedWay'
			component={PreparedWay}
			options={{
				headerShown: false,
			}} />

	</Stack.Navigator>
);

export default StackNavigation;
