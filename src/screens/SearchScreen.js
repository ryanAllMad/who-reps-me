import React from "react";
import { ScrollView, View } from "react-native";
import SearchBar from "../components/SearchBar";


const SearchScreen = ({navigation}) => {
	return <View style={{flex: 1, backgroundColor: 'white'}} nestedScrollEnabled={false}>
		<SearchBar navigation={navigation} searchFor="Enter Street Address" />
	</View>
}

export default SearchScreen