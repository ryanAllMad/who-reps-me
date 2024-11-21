import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView } from "react-native";
import ListResults from "../components/ListResults";
import Loading from "../components/Loading";
import { styles } from "../components/StyleSheet";
import { APIKEY } from "@env";


const RepScreen = ({navigation}) => {
	const state = navigation.getParam('state')
	const address = navigation.getParam('address')
	const [results, setResults] = useState(null);
	const [repResults, setRepResults] = useState(null);
	const [resultError, setResultError] = useState(null)
	const handleSearch = async (addr) => {
		const res = await fetch(
			`https://www.googleapis.com/civicinfo/v2/representatives?address=${addr}&key=${APIKEY}&includeOffices=true&levels=country`,
			{
				method: 'GET',
			}
		);
		return res.json();
	};
	useEffect(() => {
		handleSearch(address)
			.then((d) => { 
				setResults(d)
				setResultError(null)
			})
			.catch((err) => setResultError(err.message));
	}, [address])
	useEffect(() => {
		if (results && results.officials) {
			const reducedResults = results.officials.filter(
				(res) => res.urls[0] !== 'https://www.whitehouse.gov/'
			);
			setRepResults(reducedResults);
		}
	}, [results]);
	return (
		<SafeAreaView style={{flex: 1, paddingBottom: '20%'}}>
			<View
				style={{
					width: '100%',
					backgroundColor: 'white',
					alignItems: 'flex-start',
					justifyContent: 'center',
					paddingTop: '2%',
				}}
			>
				<Text style={styles.heading3}>Your Representatives:</Text>
			</View>
			{!resultError && results && results.officials && repResults && (
				<SafeAreaView contentContainerStyle={{ flex: 1, position: 'relative' }}>
					<ListResults
						rep={repResults}
						repKey={(rep) => rep.name}
						USState={state}
						navigation={navigation}
					/>
				</SafeAreaView>
			)}
			{!resultError && (!results || !results.officials || !repResults) && <Loading results={results} fetched={true} />}
			{resultError && <Text style={{color: 'rgb(153, 29, 32)'}} >{resultError}</Text>}
	</SafeAreaView>
	)
}

export default RepScreen