import {StyleSheet} from "react-native";

const module_style = StyleSheet.create({
	TopTitle:{
		color: "#58595b",
		marginTop:15,
		textAlign:'center'
	},
	profileImageWrapper:{
		width: 100,
		height: 100,
		marginLeft:135,
		marginRight:135,
		marginBottom:20,
	},
	profileImage:{
		width: 100,
		height: 100,
		borderRadius: 50,
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
	},
	editProfileImageWrapper:{
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#fff',
		borderRadius: 35,
		right: 0,
		borderColor: 'black',
		borderWidth: 0.5
	},
	editProfileImageIcon:{
		paddingHorizontal: 5,
		paddingVertical: 5,
	}
});

export default module_style