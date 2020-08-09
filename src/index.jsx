import React from 'react';
import { View } from 'react-native';

//components
//import Navigator from './screens/Main/Main.screen';

import Navigator from './components/Test/Test.component';

const App = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Navigator />
		</View>

	);
};

export default App;
