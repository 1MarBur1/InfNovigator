import React from 'react';
import { View } from 'react-native';

//components
import Test from 'components/Test';

const App: React.FC = ({}) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Test name='Test' />
		</View>
	);
};

export default App;
