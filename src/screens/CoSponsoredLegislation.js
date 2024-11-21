import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { styles } from "../components/StyleSheet";
import LegislationList from "../components/LegislationList";
import Loading from "../components/Loading";
import { congressAPIKEY } from "@env";
import Footer from "../components/Footer";

const CoSponsoredLegislation = ({navigation}) => {
	const [leg, setLeg] = useState(null)
	const [resultError, setResultError] = useState('')
	const apiCall = navigation.getParam('apiCall')
	const findCoSponsored = async () => {
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
			findCoSponsored().then(d => {
				setLeg(d)
				setResultError(null)
			}).catch(err => setResultError(err.message))
		}
	}, [apiCall])

	return <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(242, 238, 227)'}}>
		<View style={{width: '100%', backgroundColor: 'white', elevation: 7}} >
			<Text style={styles.heading2}>Co-Sponsored Legislation:</Text>
		</View>
		{!resultError && leg && leg.cosponsoredLegislation.length > 0 && <LegislationList 
			legKey={l => l.number ? l.number : l.amendmentNumber}
			legData={leg.cosponsoredLegislation}
		/>}
		{!resultError && (!leg || leg.cosponsoredLegislation.length === 0) &&<Loading fetched={true} results={leg && leg.cosponsoredLegislation.length > 0} />}
		{resultError && <Text style={{color: 'rgb(153, 29, 32)'}}>{resultError}</Text>}
		<Footer />
	</SafeAreaView>
}

export default CoSponsoredLegislation