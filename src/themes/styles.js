import {StyleSheet, Dimensions} from "react-native";

var {height, width} = Dimensions.get('window');

const defaultFontSize = 10;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#fff'
	},
	top: {
		height: 200,
		alignItems: 'center',
		justifyContent: 'center'
	},
	topInner: {
		paddingTop: 32,
		paddingBottom: 20,
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	navigation: {
		height: 100,
		justifyContent: 'center'
	},
	content: {
		flex: 1,
	},
	logo: {
		width: 50,
		height: 67
	},
	companyName: {
		fontWeight: "bold",
		color: "#fff",
		marginTop: 15,
		fontSize: defaultFontSize * 3,
	},
	button: {
		borderRadius: 40,
		backgroundColor: "#4de1d3",
		padding: 17,
		marginLeft: 45,
		marginRight: 45,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		marginBottom: 10,
		elevation: 2, 
	},
	buttonInside: {
		alignSelf: 'center',
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 2 * defaultFontSize
	},
	inputWrapper: {
		paddingLeft:10,
		paddingRight:10,
		paddingTop:10,
		paddingBottom:10,
		borderWidth:1.5,
		borderColor:'#ececec',
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 15,
		borderRadius: 20,
		alignSelf: 'stretch',
		width: width - 60,
	},
	inputWrapperTop: {
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15
	},
	inputWrapperBottom: {
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15
	},
	inputIcon: {},
	iconWrapper: {
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 25,
		borderRightColor: "#5a5c6d",
		borderRightWidth: 2,
		marginTop: 15,
		marginBottom: 15,
	},
	header:{
		paddingTop: 22,
		paddingBottom: 12,
		justifyContent:'center',
		alignItems:'center',
		//height: 60,
		width: '100%',
		shadowColor: "#333",
		shadowOffset: {width: 0,height: 3},
		shadowOpacity: 0.6,
		backgroundColor:"#fff"
	},
	headerText:{
		fontSize:25,
		color: '#4de1d3',
		fontWeight: 'bold'
	},
	nav:{
		borderTopWidth:1,
		borderTopColor: "#eee",
		padding:10,
		backgroundColor:"#ddd"
	},
	bigTitle:{
		fontSize: 50
	},
	expenseItem: {
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 20,
		backgroundColor:"#5cccc7",
		color: '#fff',
		marginLeft:5,
		marginRight:5,
		marginBottom:10,
	},
	expenseItemWrapper:{
		flexDirection: 'row',
		alignSelf: 'flex-start',
		flexWrap: 'wrap',
		marginLeft:10,
		marginRight:10
	},
	hashtag:{
		borderRadius: 15,
		borderWidth:1,
		borderColor: "#818181",
		height: 30,
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 20,
		paddingLeft: 15,
		paddingRight: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	hashtagActive:{
		backgroundColor: '#61cec9',
		borderColor: "#61cec9",
	},
	hashtagInside:{
		color: '#818181',
	},
	hashtagActiveText:{
		color: '#fff',
	},
	homeImage:{
		width: 114,
		height: 114,
		shadowOpacity: 1.0,
		borderRadius: 57
	},
	homeImageWrap:{
		marginBottom: 15,
	},
	homeImageText:{
		fontSize:18,
		color: '#4de1d3',
		fontWeight: 'bold'
	},
	homeBox: {
		width: width/2 - 30,
		marginLeft: 7,
		marginRight: 7,
		marginBottom: 25,
		backgroundColor: '#f1f1f1', 
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		borderRadius: 9,
	},
	navBar:{
		display: 'flex',
		height: 60,
		width: '100%',
		backgroundColor: '#fff',
		borderTopWidth: 0.5,
		borderColor: "#e5e5e5",
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTitle: {
		fontSize: 11,
		color: '#3c3c3c'
	}

});

export default styles;