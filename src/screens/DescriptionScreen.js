import React, { useEffect, useState } from 'react';
import { Text, View, Image, Pressable, Linking, ScrollView } from 'react-native';
import { styles } from '../components/StyleSheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Loading from '../components/Loading';
import { congressAPIKEY } from "@env";
import Footer from '../components/Footer';

const DescriptionScreen = ({ navigation }) => {
	const [repsInfo, setRepsInfo] = useState(null);
	const [myMember, setMyMember] = useState(null);
	const [memberInfo, setMemberInfo] = useState(null);
	const [bioguideId, setBioGuideId] = useState(null);
	const [partyColor, setPartyColor] = useState('rgb(27, 75, 113)');
	const name = navigation.getParam('name');
	const state = navigation.getParam('state');
	const { navigate } = navigation;
	const parsedRepLastName = name && name.match(/\S+\s*$/)[0].trim();
	const [resultsError, setResultError] = useState(null)

	const findMemberBy = async (el) => {
		const res = await fetch(`https://api.congress.gov/v3/member/${el}`, {
			method: 'GET',
			headers: {
				'X-Api-Key': congressAPIKEY,
			},
		});
		return res.json();
	};
	useEffect(() => {
		if (name && state) {
			findMemberBy(state)
				.then((d) => {
					setRepsInfo(d)
				})
				.catch((err) => setResultError(err.message));
		}
	}, [name, state]);
	useEffect(() => {
		if (repsInfo && repsInfo.members && repsInfo.members.length > 0) {
			setResultError(null)
			setMyMember(
				repsInfo.members.filter((rep) =>
					rep.name.includes(parsedRepLastName)
				)
			);
		}
	}, [repsInfo]);
	useEffect(() => {
		if (myMember && myMember.length > 0) {
			setBioGuideId(myMember[0].bioguideId);
			if (myMember[0].partyName !== 'Democratic') {
				setPartyColor('rgb(153, 29, 32)');
			}
		}
	}, [myMember]);
	useEffect(() => {
		if (bioguideId) {
			findMemberBy(bioguideId)
				.then((d) => setMemberInfo(d))
				.catch((err) => setResultError(err.message));
		}
	}, [bioguideId]);

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'rgb(242, 238, 227)',
				
			}}
		>
			{!resultsError && memberInfo && memberInfo.member && myMember && myMember.length > 0 && (
				<ScrollView style={{ flex: 1}} contentContainerStyle={{justifyContent: 'flex-start',
					alignItems: 'center', paddingVertical: '15%', minHeight: '130%'}}>
					<Image
						style={styles.imageRound}
						source={{ uri: memberInfo.member.depiction.imageUrl }}
					/>
					<Text style={styles.heading2}>
						{memberInfo.member.directOrderName}
					</Text>
					<Text
						style={{
							color: partyColor,
							fontSize: 18,
							flexWrap: 'wrap',
							maxWidth: '80%',
							fontWeight: '700',
							marginBottom: 15
						}}
					>
						Party: {myMember[0].partyName}
					</Text>
					<Pressable
						onPress={() =>
							Linking.openURL(
								memberInfo.member.officialWebsiteUrl
							)
						}
					>
						<Text style={styles.linkStyle}>
						<MaterialIcons name="open-in-new" size={20} color="rgb(27, 75, 113)" />
						{' '}Go to Website
						</Text>
					</Pressable>
					<Pressable
						onPress={() =>
							Linking.openURL(
								`tel:${memberInfo.member.addressInformation.phoneNumber}`
							)
						}
					>
						<Text style={styles.linkStyle}>
							<Fontisto name="phone" size={16} color="rgb(27, 75, 113)" />
							{' '}Call{' '}
							{memberInfo.member.addressInformation.phoneNumber}
							
						</Text>
					</Pressable>
					<Pressable
						style={styles.buttonBlue}
						onPress={() =>
							navigate('Sponsored', {
								apiCall:
									memberInfo.member.sponsoredLegislation.url,
							})
						}
					>
						<Text style={styles.buttonTextBlue}>
							Sponsored legislation
						</Text>
					</Pressable>
					<Pressable
						style={styles.buttonBlue}
						onPress={() =>
							navigate('CoSponsored', {
								apiCall:
									memberInfo.member.cosponsoredLegislation
										.url,
							})
						}
					>
						<Text style={styles.buttonTextBlue}>
							Co-Sponsored legislation
						</Text>
					</Pressable>
				</ScrollView>
			)}
			{!resultsError && (!memberInfo || !memberInfo.member || !myMember) && <Loading results={memberInfo} fetched={true} />}
			{resultsError && <Text style={{color: 'rgb(153, 29, 32)'}}>{resultsError}</Text>}
			<Footer />
		</View>
	);
};

export default DescriptionScreen;
