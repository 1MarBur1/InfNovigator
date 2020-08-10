
import React from 'react';
import { View, StatusBar } from 'react-native';

//components
import Navigator from './screens/MainScreen/Main.screen';

const App = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<StatusBar
				backgroundColor='#ffffff'
				barStyle='dark-content' />

			<Navigator />
		</View>

	);
};

export default App;

