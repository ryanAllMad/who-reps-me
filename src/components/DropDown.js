import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './StyleSheet';

const DropDown = ({ value, setValue }) => {
	const states = [
		{ label: 'AL', value: 'AL' },
		{ label: 'AK', value: 'AK' },
		{ label: 'AR', value: 'AR' },
		{ label: 'AZ', value: 'AZ' },
		{ label: 'KY', value: 'KY' },
		{ label: 'OH', value: 'OH' },
		{ label: 'LA', value: 'LA' },
		{ label: 'OK', value: 'OK' },
		{ label: 'ME', value: 'ME' },
		{ label: 'OR', value: 'OR' },
		{ label: 'MD', value: 'MD' },
		{ label: 'PA', value: 'PA' },
		{ label: 'AS', value: 'AS' },
		{ label: 'MA', value: 'MA' },
		{ label: 'PR', value: 'PR' },
		{ label: 'CA', value: 'CA' },
		{ label: 'MI', value: 'MI' },
		{ label: 'RI', value: 'RI' },
		{ label: 'CO', value: 'CO' },
		{ label: 'MN', value: 'MN' },
		{ label: 'SC', value: 'SC' },
		{ label: 'CT', value: 'CT' },
		{ label: 'MS', value: 'MS' },
		{ label: 'SD', value: 'SD' },
		{ label: 'DE', value: 'DE' },
		{ label: 'MO', value: 'MO' },
		{ label: 'TN', value: 'TN' },
		{ label: 'DC', value: 'DC' },
		{ label: 'MT', value: 'MT' },
		{ label: 'TX', value: 'TX' },
		{ label: 'FL', value: 'FL' },
		{ label: 'NE', value: 'NE' },
		{ label: 'TT', value: 'TT' },
		{ label: 'GA', value: 'GA' },
		{ label: 'NV', value: 'NV' },
		{ label: 'UT', value: 'UT' },
		{ label: 'GU', value: 'GU' },
		{ label: 'NH', value: 'NH' },
		{ label: 'VT', value: 'VT' },
		{ label: 'HI', value: 'HI' },
		{ label: 'NJ', value: 'NJ' },
		{ label: 'VA', value: 'VA' },
		{ label: 'ID', value: 'ID' },
		{ label: 'NM', value: 'NM' },
		{ label: 'VI', value: 'VI' },
		{ label: 'IL', value: 'IL' },
		{ label: 'NY', value: 'NY' },
		{ label: 'WA', value: 'WA' },
		{ label: 'IN', value: 'IN' },
		{ label: 'NC', value: 'NC' },
		{ label: 'WV', value: 'WV' },
		{ label: 'IA', value: 'IA' },
		{ label: 'ND', value: 'ND' },
		{ label: 'WI', value: 'WI' },
		{ label: 'KS', value: 'KS' },
		{ label: 'MP', value: 'MP' },
		{ label: 'WY', value: 'WY' },
	];
	const sortedStates = states.sort((a, b) => {
		if (a.label < b.label) {
			return -1;
		}
		if (a.label > b.label) {
			return 1;
		}
		return 0;
	});
	const [open, setOpen] = useState(false);
	const [items, setItems] = useState(sortedStates);
	return (
		<DropDownPicker
			style={{
				borderWidth: 1,
				borderColor: 'rgb(27, 75, 113)',
				backgroundColor: 'white',
				borderRadius: 4,
				lineHeight: 4,
				padding: 7,
				width: '100%',
				maxWidth: 380,
				fontSize: 16,
				alignItems: 'center',
				justifyContent: 'center',
				verticalAlign: 'middle',
				textTransform: 'uppercase',
				zIndex: 1,
			}}
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setValue}
			setItems={setItems}
			dropDownContainerStyle={{ width: '100%', maxWidth: 380 }}
		/>
	);
};

export default DropDown;
