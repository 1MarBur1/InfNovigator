import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './CustomButton.styles';

const CustomButton = ({
	header,
	style,
}) => {
	return (
		<TouchableOpacity style={[styles.button, style]}>
			<Text style = {styles.buttonText}>{header}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
