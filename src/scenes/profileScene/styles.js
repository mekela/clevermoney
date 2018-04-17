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
	list_link_wrapper:{
		borderColor: '#343434',
		borderBottomWidth:1,
		paddingHorizontal: 16,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	list_link:{
		fontSize:18
	},
	list_icon:{

	},
	form_label_wrapper:{
		paddingHorizontal: 30
	}
});

export default module_style