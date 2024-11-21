import React from 'react';
import { View, Text, Pressable, FlatList, Linking } from 'react-native';
import { styles } from './StyleSheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const LegislationList = ({ legKey, legData }) => {
	return (
		<FlatList
			horizontal={false}
			keyExtractor={legKey}
			data={legData}
			renderItem={({ item }) => {
				return (
					<>
						{item.title && item.congress && item.type && item.number && (
							<View
								style={[styles.listStyle, { alignItems: 'flex-start'}]}
							>
								<Pressable
									onPress={() =>
										Linking.openURL(
											`https://www.congress.gov/search?q=%7B"congress"%3A%5B"${
												item.congress
											}"%5D%2C"source"%3A"all"%2C"search"%3A"${item.type.toLowerCase()}+${
												item.number
											}"%7D`
										)
									}
								>
									<Text
										style={{
											color: 'white',
											fontSize: 20,
											flexWrap: 'wrap',
											maxWidth: '80%',
											marginBottom: 15,
											paddingBottom: 7,
											borderBottomWidth: 1,
											borderBottomColor: 'white'
										}}
										numberOfLines={4}
									>
										<MaterialIcons name="open-in-new" size={20} color="white" />
										{' '}
										{item.title}
									</Text>
								</Pressable>
								{item.policyArea && item.policyArea.name && (
									<Text
										style={{
											color: 'white',
											fontWeight: '500',
											fontSize: 16,
											marginBottom: 5,
										}}
									>
										Category: {item.policyArea.name}
									</Text>
								)}
								{item.introducedDate && (
									<Text
										style={{ color: 'white', fontSize: 14 }}
									>
										Introduced: {item.introducedDate}{' '}
									</Text>
								)}
							</View>
						)}
					</>
				);
			}}
		/>
	);
};

export default LegislationList;
