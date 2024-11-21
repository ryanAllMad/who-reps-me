import React from "react";
import { Text, Pressable, Linking, View } from "react-native";
import { styles } from "./StyleSheet";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Footer = () => {
	return (
		<View style={{height:  '35%', padding: 15, position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'white', justifyContent: 'center'}}>
			<Text style={styles.text}>Developed by All Mad Designs.</Text>
			<Text style={styles.text}>This app does not store any of your data, will not show ads, and will remain free to use.</Text>
			<Pressable onPress={() => Linking.openURL('https://buymeacoffee.com/ryanallmad')}>
				<Text style={styles.linkStyle}> 
					<MaterialIcons name="open-in-new" size={20} color="rgb(27, 75, 113)" />
				{' '} Click to Support This Project</Text>
			</Pressable>
		</View>
	);
};

export default Footer
