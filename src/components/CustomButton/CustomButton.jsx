import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './CustomButton.styles';

const CustomButton = ({
	header,
	style,
	onPress,
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, style]}
			onPress = {onPress}
		>
			<Text style = {styles.buttonText}>{header}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
