import {StyleSheet, Dimensions} from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
const MARGIN_SMALL = 8;
const MARGIN_LARGE = 16;

const module_style = StyleSheet.create({
	containerBackground: {
		backgroundColor: '#53cac4',
		width: '100%',
	},
	bigTitle:{
		textAlign:'center',
		color: '#fff',
		marginRight:45,
		marginLeft:45,
	},
	Text:{
		textAlign:'center',
		color: '#fff',
		fontSize:22,
		marginRight:45,
		marginLeft:45,
	},
	selectInput: {
		flexDirection:            'row',
		//height:                   36,
		//padding:                  MARGIN_SMALL,
		//marginTop:                MARGIN_LARGE,
		//color: '#fff',
		alignSelf: 'flex-end',
		marginRight: 5,
	},
	selectInputSmall: {
		//width:                    SCREEN_WIDTH * 0.5 - (MARGIN_LARGE * 2),

	},
	selectWrapper:{
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	}
});

export default module_style