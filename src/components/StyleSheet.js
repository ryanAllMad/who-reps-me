import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	heading2: {
		fontSize: 20,
		color: 'rgb(153, 29, 32)',
		flexWrap: 'wrap',
		maxWidth: '80%',
		fontWeight: '700',
		marginBottom: 15,
		marginLeft: 15
	},
	heading2Link: {
		fontSize: 20,
		fontWeight: '700',
		color: 'rgb(27, 75, 113)',
		flexWrap: 'wrap',
		maxWidth: '80%',
		marginBottom: 15,
		marginLeft: 15
	},
	heading3: {
		fontSize: 18,
		color: 'rgb(27, 75, 113)',
		flexWrap: 'wrap',
		maxWidth: '80%',
		fontWeight: '700',
		paddingBottom: 15,
		paddingLeft: 15,
		backgroundColor: 'white',
		width: '100%',
		marginLeft: 15
	},
	boxStyle: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		height: '300%',
		width: '100%',
		padding: 15,
		backgroundColor: 'rgb(242, 238, 227)',
		flex: 1,
	},
	rowBoxStyle: {
		flexDirection: 'row',
	},
	formBoxStyle: {
		marginLeft: 15,
		maxWidth: '100%'
	},
	linkStyle: {
		fontSize: 16,
		color: 'rgb(27, 75, 113)',
		fontWeight: '500',
		marginBottom: '5%'
	},
	textInput: {
		borderWidth: 1,
		borderColor: 'rgb(27, 75, 113)',
		backgroundColor: 'white',
		borderRadius: 4,
		lineHeight: 25,
		padding: 12,
		width: '100%',
		maxWidth: 380,
		fontSize: 15,
		alignItems: 'center',
		justifyContent: 'center',
		verticalAlign: 'middle',
		textTransform: 'uppercase',
	},
	labelText: {
		fontSize: 12,
		flexWrap: 'wrap',
		maxWidth: '97%',
		fontWeight: '600',
		marginTop: 7,
		color: 'rgb(27, 75, 113)',
	},
	text: {
		fontSize: 15,
		flexWrap: 'wrap',
		maxWidth: '97%',
	},
	textBold: {
		fontSize: 20,
		flexWrap: 'wrap',
		fontWeight: '600',
	},
	button: {
		width: '100%',
		maxWidth: 380,
		backgroundColor: 'white',
		borderColor: 'rgb(27, 75, 113)',
		borderWidth: 1,
		padding: 14,
		borderRadius: 100,
		marginVertical: 10,
		flexDirection: 'row-reverse',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonBlue: {
		width: '100%',
		maxWidth: 380,
		backgroundColor: 'rgb(27, 75, 113)',
		borderColor: 'rgb(27, 75, 113)',
		borderWidth: 1,
		padding: 14,
		borderRadius: 100,
		marginVertical: 10,
		flexDirection: 'row-reverse',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: 'rgb(27, 75, 113)',
		textDecorationColor: 'white',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '600'
	},
	buttonTextBlue: {
		color: 'white',
		textDecorationColor: 'white',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '600'
	},
	imageRound: {
		height: 175,
		width: 175,
		borderRadius: 175,
		marginBottom: 15
	},
	listStyle: {
		margin: 15,
		padding: 14,
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 4,
		backgroundColor: 'rgb(27, 75, 113)',
		minWidth: 290,
		elevation: 7
	},
	listLinkStyle: {
		marginTop: 7,
		paddingVertical: 7,
		justifyContent: 'space-between',
		color: 'white',
		fontSize: 16
	},
	listTextStyle: {
		fontSize: 16,
		flexWrap: 'wrap',
		maxWidth: '97%',
		color: 'white',
	},
});
