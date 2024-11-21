import React from 'react';
import { Text } from 'react-native';
import { styles } from './StyleSheet';

const Item = ({title}) => {
	return <Text style={styles.listTextStyle}>{title}</Text>
}

export default Item