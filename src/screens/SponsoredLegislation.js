import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { styles } from "../components/StyleSheet";
import LegislationList from "../components/LegislationList";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { congressAPIKEY } from "@env";

const SponsoredLegislation = ({navigation}) => {
	const [leg, setLeg] = useState(null)
	const [resultsError, setResultError] = useState('')
	const apiCall = navigation.getParam('apiCall')
	const findSponsored = async () => {
		const res = await fetch(`${apiCall}`, {
			method: 'GET',
			headers: {
				'X-Api-Key': congressAPIKEY,
			},
		});
		return res.json();
	};
	useEffect(() => {
		if(apiCall) {
			findSponsored().then(d => {
				setLeg(d)
				setResultError(null)
		}).catch(err => setResultError(err.message))
		}
	}, [apiCall])

	return <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(242, 238, 227)'}}>
			<View style={{width: '100%', backgroundColor: 'white', elevation: 7}} >
				<Text style={styles.heading2}>Sponsored Legislation:</Text>
			</View>
		{!resultsError && leg && leg.sponsoredLegislation.length > 0 && (<LegislationList 
			legKey={l => l.number ? l.number : l.amendmentNumber}
			legData={leg.sponsoredLegislation}
		/>)}
		{!resultsError && (!leg || leg.sponsoredLegislation.length === 0) &&  <Loading fetched={true} results={leg && leg.sponsoredLegislation.length > 0} />}
		{resultsError && <Text style={{color: 'rgb(153, 29, 32)'}}>{resultsError}</Text>}
		<Footer />
	</SafeAreaView>
}

export default SponsoredLegislation