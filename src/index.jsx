import React from 'react';
import { View, StatusBar } from 'react-native';

//components
import Navigator from './screens/Main/Main.screen';
import Languages from './screens/LanguageSelection/LanguageSelection.screen';
import Sights from './screens/Sights/Sights.screen';

const App = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<StatusBar
				backgroundColor='#ffffff'
				barStyle='dark-content' />

			<Sights />
		</View>

	);
};

export default App;
