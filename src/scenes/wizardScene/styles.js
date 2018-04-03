import {StyleSheet, Dimensions} from "react-native";

var {height, width} = Dimensions.get('window');

const module_style = StyleSheet.create({
	welcomeImage:{
		width: 250,
		height: 250,
		marginBottom: 30,
		alignSelf:'center'
	},
	welcomeTitle:{
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10
	},
	welcomeText:{
		fontSize: 20,
		textAlign: 'center'
	}
});

export default module_style