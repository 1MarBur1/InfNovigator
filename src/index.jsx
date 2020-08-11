import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './screens/RootNavigation.navigation';

//nav
import { NavigationContainer } from '@react-navigation/native';
import { MyWay, PreparedWay } from 'screens';

const App = () => {
	return (
		<NavigationContainer>

			<StatusBar
				backgroundColor='#ffffff'
				barStyle='dark-content' />

			<RootNavigation />
		</NavigationContainer>
	);
};

export default App;
