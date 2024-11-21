import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheet';

const Button = ({ buttonText, handlePress, children }) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={handlePress}
		>
			<Text style={styles.buttonText}>{buttonText}</Text>
			{children}
		</TouchableOpacity>
	);
};

export default Button
