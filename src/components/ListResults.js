import React from 'react';
import { Text, View, FlatList, Pressable, Linking } from 'react-native';
import Button from './Button';
import Item from './Item';
import { styles } from './StyleSheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

const ListResults = ({ rep, repKey, USState, navigation }) => {
	const { navigate } = navigation;
	return (
		<FlatList
			style={{
				backgroundColor: 'rgb(242, 238, 227)'
			}}
			horizontal={false}
			keyExtractor={repKey}
			data={rep}
			renderItem={({ item }) => {
				return (
					<View style={styles.listStyle}>
						<Text
							style={{
								color: 'white',
								fontWeight: '500',
								fontSize: 18,
								marginBottom: '2%',
							}}
						>
							{item.name}
						</Text>
						<Item title={item.party} />
						<Pressable
							onPress={() =>
								Linking.openURL(`tel:${item.phones[0]}`)
							}
						>
							<Text style={styles.listLinkStyle}>
								<Fontisto
									name='phone'
									size={16}
									color='white'
								/>{' '}
								{item.phones[0]}
							</Text>
						</Pressable>
						<Pressable
							onPress={() => Linking.openURL(`${item.urls[0]}`)}
						>
							<Text style={styles.listLinkStyle}>
								<MaterialIcons
									name='open-in-new'
									size={16}
									color='white'
								/>{' '}
								Go To Website
							</Text>
						</Pressable>
						<Button
							handlePress={() =>
								navigate('Description', {
									name: item.name,
									state: USState,
								})
							}
							buttonText='Learn More'
						/>
					</View>
				);
			}}
		/>
	);
};

export default ListResults;
