import {StyleSheet} from "react-native";

const module_style = StyleSheet.create({
	addExpensesContainer:{
		paddingTop:20,
		paddingBottom: 0, 
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	addExpensesTitle:{
		fontWeight: 'bold',
		fontSize: 18,
		paddingBottom: 20
	},
	addExpensesSubTitle:{
		fontSize: 14
	},
	hashtags:{
		paddingTop:30,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	hashtagActiveText:{
		color: '#fff'
	},
	expenseForm:{
		paddingBottom:30,
		paddingTop:30, 
	},
	categoryLine:{
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	formLabel:{
		paddingLeft: 30,
		paddingBottom: 10,
		fontSize: 20,
	},
	formPlus:{
		paddingRight: 30,
	}
});

export default module_style