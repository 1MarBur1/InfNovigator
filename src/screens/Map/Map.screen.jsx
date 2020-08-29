import React from 'react';
import { View, StyleSheet } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

//styles
import styles from './Map.styles';

const Map = () => {
	return (
		<View style={styles.container}>
			<View style={styles.panel} />

			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				region={{
					latitude: 56.833332,
					longitude: 60.583332,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				}} />
		</View>
	);
};

export default Map;
