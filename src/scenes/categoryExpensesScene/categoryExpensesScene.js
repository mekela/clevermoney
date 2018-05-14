// import {TouchableOpacity, ScrollView, View, Text, Image} from "react-native";
// import React, {Component} from "react";
// import {connect} from 'react-redux';
// import {Actions} from 'react-native-router-flux';
//
// import styles from "../../themes/styles";
// import Loader from "../../components/loader";
// import Layout from "../../components/layout"
// import {getCafes, setCafe} from "../../actions/cafeActions";
//
// class categoryExpanseScene extends Component {
//
// 	componentWillMount() {
// 		this.props.getCafes();
// 	}
//
// 	itemPress(cafe) {
// 		this.props.setCafe(cafe);
// 		Actions.item();
// 	}
//
// 	renderCafes(){
// 		console.log(this.props.cafes.getCafes);
// 		return this.props.cafes.getCafes.map(cafe => (
// 			<TouchableOpacity key={cafe.id}>
// 				<Text>{cafe.name}</Text>
// 				<Text>{cafe.description}</Text>
// 			</TouchableOpacity>
// 		))
// 	}
//
// 	render(){
// 		return (
// 			<View style = { styles.container }>
// 				<ScrollView style= { [styles.content, styles.topInner] } >
//
// 					{this.props.cafes.loading ? <Loader/> : this.renderCafes()}
// 					{/*<View style= { styles.expenseItemWrapper } >*/}
// 						{/*<ExpenseItem>Категорія 1</ExpenseItem>*/}
// 						{/*<ExpenseItem>Категорія 2</ExpenseItem>*/}
// 						{/*<ExpenseItem>Категорія 3</ExpenseItem>*/}
// 						{/*<ExpenseItem>Категорія 4</ExpenseItem>*/}
// 					{/*</View>*/}
// 					<View style={styles.subtitle_wrapper}>
// 						<Text style={styles.subtitle}>Нова категорія</Text>
// 					</View>
// 					<Input value="Категорія 1" />
// 					<View style= { styles.navigation } >
// 						<Button text="Додати"/>
// 					</View>
// 				</ScrollView>
// 				<Nav/>
// 			</View>
// 		);
// 	}
// }
//
// const mapStateToProps = ({cafes})=>{
// 	return { cafes }
// };
//
// const mapActionsToProps = {
// 	getCafes, setCafe
// };
//
// export default connect(mapStateToProps, mapActionsToProps)(categoryExpanseScene);

import {TouchableOpacity, ScrollView, View, Text, Image} from "react-native";
import React, {Component} from "react";
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import Loader from "../../components/loader";
import Layout from "../../components/layout"
import {getCafes, setCafe} from "../../actions/cafeActions";
import Toaster from '../../../src/components/toaster'

class listScene extends Component {


	componentWillMount() {
		this.props.getCafes();
	}

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		Toaster.showMessage('2222');
	// 	},2000)
	// }

	itemPress(cafe) {
		this.props.setCafe(cafe);
		Actions.item();
	}

	renderCafes() {

		// return this.props.cafes.list.map(items => (
		// 		<TouchableOpacity onPress={this.itemPress.bind(this, items)} key={items.id}>
		// 			<View>
		// 				<Text>{items.name}</Text>
		// 			</View>
		//
		// 		</TouchableOpacity>
		// 	)
		// );
	}

	render() {
		return (
			<Layout title="Cafe around you" active="list">
				<ScrollView>
					<TouchableOpacity onPress={() => Toaster.showMessage('1')}>
						<Text>Click me 1</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => Toaster.showMessage('2')}>
						<Text>Click me 2</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => Toaster.showMessage('3')}>
						<Text>Click me 3</Text>
					</TouchableOpacity>
					{this.props.cafes.loading ? <Loader/> : this.renderCafes()}

				</ScrollView>
			</Layout>
		)
	}
}

const mapStateToProps = ({cafes})=>{
	return { cafes }
};

const mapActionsToProps = {
	getCafes, setCafe
};

export default connect(mapStateToProps, mapActionsToProps)(listScene);