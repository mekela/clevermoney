import {StyleSheet} from "react-native";

const module_style = StyleSheet.create({
	TopTitle:{
		color: "#58595b",
		marginTop:15,
		textAlign:'center'
	},
	profileImage:{
		width: 100,
		height: 100,
		borderRadius: 50,
		marginLeft:135,
		marginRight:135,
		marginBottom:20,
	},

	form_label_wrapper:{
		paddingHorizontal: 30
	},
	strong_text:{
		fontWeight: 'bold',
		paddingLeft: 18,
		paddingBottom: 10
	},
	strong_text_wrapper:{
		flexDirection:'row'
	}
});

export default module_style