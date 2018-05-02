import {StyleSheet} from "react-native";

const module_style = StyleSheet.create({
	bgLogin:{
		paddingTop:13,
		paddingBottom: 13,
		height: 300,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	loginImage:{
		width: 114,
		height: 114,
		shadowOpacity: 1.0,
		borderRadius: 57
	},
	loginImageWrap:{
		borderWidth: 10,
		borderColor: 'rgba(255, 255, 255, 0.2)',
		shadowOffset:{ width: 10, height: 10, },
		shadowColor: 'black',
		borderRadius: 67
	},
	loginForm:{
		//paddingTop:23,
		width: '100%',
	},
	loginIcons:{ 
		flexDirection: 'row',
		marginTop: 20,
	},
	inputForm:{
		width: '100%' - 60,
	}
});

export default module_style