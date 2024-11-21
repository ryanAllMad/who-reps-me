import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, SafeAreaView, Pressable } from 'react-native';
import Button from './Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './StyleSheet';
import DropDown from './DropDown';

const SearchBar = ({ searchFor, navigation }) => {
	const { navigate } = navigation
	const [streetAddress, setStreedAddress] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [fullAddress, setFullAddress] = useState(null)
	const [errors, setErrors] = useState({})
	const validateForm = () => {
		let errorObj = {}
		if(!streetAddress) {
			errorObj.streetAddress = 'Enter street address.'
		}
		if(!city) {
			errorObj.city = 'Enter city.'
		}
		if(!postalCode) {
			errorObj.postalCode = 'Enter zip code'
		}
		if(postalCode.length < 5) {
			errorObj.postalCode = 'The zip code must be at least 5 numbers'
		}
		if(Number(postalCode) === NaN) {
			errorObj.postalCode = 'The zip code can only be a number'
		}
		if(state.length !== 2) {
			errorObj.state = 'Choose a state.'
		}
		setErrors(errorObj)
	}


	const mergeAddress = (street, cit, st, zip) => {
		if (!street || !cit || !st || !zip) {
			return;
		}
		return `${street} ${cit} ${st} ${zip}`;
	};
	const handleThePress = () => {
		const address = mergeAddress(streetAddress, city, state, postalCode)
		setFullAddress(address);
	};

	useEffect(() => {
		validateForm()
	}, [streetAddress, postalCode, city, state])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text style={styles.heading2}>{searchFor}</Text>
			<View style={styles.formBoxStyle}>
				<Text style={styles.labelText}>Street Address:</Text>
				<TextInput
					autoComplete='street-address'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.textInput}
					value={streetAddress}
					onChangeText={(v) => setStreedAddress(v)}
				/>
				{errors.streetAddress && <Text style={{ color: 'rgb(153, 29, 32)' }}>{errors.streetAddress}</Text>}
				<Text style={styles.labelText}>City:</Text>
				<TextInput
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.textInput}
					value={city}
					onChangeText={(v) => setCity(v)}
				/>
				{errors.city && <Text style={{ color: 'rgb(153, 29, 32)' }}>{errors.city}</Text>}
				<Text style={styles.labelText}>State:</Text>
				<DropDown
					value={state}
					setValue={(v) => setState(v)}
				/>
				{errors.state && <Text style={{ color: 'rgb(153, 29, 32)' }}>{errors.state}</Text>}
				<Text style={styles.labelText}>ZipCode:</Text>
				<TextInput
					autoComplete='postal-code'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.textInput}
					value={postalCode}
					onChangeText={(v) => setPostalCode(v)}
				/>
				{errors.postalCode && <Text style={{ color: 'rgb(153, 29, 32)' }}>{errors.postalCode}</Text>}
				<Button
					buttonText='Search'
					handlePress={handleThePress}
				>
					<AntDesign
						name='search1'
						size={18}
						color='rgb(27, 75, 113)'
					/>
				</Button>
				{fullAddress && (
					<Pressable style={styles.buttonBlue} onPress={() => navigate('RepScreen', { address: fullAddress, state: state })}>
					<Text style={styles.buttonTextBlue}>See Rep's</Text>
				</Pressable>)}
			</View>
		</SafeAreaView>
	);
};

export default SearchBar;
