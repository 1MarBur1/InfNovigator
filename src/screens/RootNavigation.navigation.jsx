import React from 'react';
import { View, Text } from 'react-native';

//screens
import Main from './Main/Main.screen';
import Languages from './LanguageSelection/LanguageSelection.screen';

//nav
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigation = () => (
	<Stack.Navigator initialRouteName='root/main'>

		<Stack.Screen
			name='root/main'
			component={Main} />

	</Stack.Navigator>
);

export default RootNavigation;
