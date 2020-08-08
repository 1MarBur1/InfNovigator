import React from 'react';
import { Text } from 'react-native';

//styles
import styles from './Test.styles';

//types
type TestProps = {
  name: string;
};

const Test: React.FC<TestProps> = ({ name }) => {
	return <Text style={styles.container}>Hello, {name}!</Text>;
};

export default Test;
