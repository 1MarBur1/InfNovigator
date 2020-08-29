import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './Category.styles';

const Button = ({
	text,
}) => {
	return (
		<TouchableOpacity style = {styles.button}>
			<Text style = {styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};

const Category = ({ header, style }) => {
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.text}>{header}</Text>

			<View style={[styles.rowContainer, { marginTop: 17 }]}>
				<Button text='Музеи' />
				<Button text='Памятники' />
			</View>

			<View style={[styles.rowContainer, { marginTop: 22 }]}>
				<Button text='Исторические места' />
				<Button text='Фото зоны' />
			</View>

		</View>
	);
};

export default Category;
