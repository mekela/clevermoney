import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from "../../themes/styles";
import style_module from "./styles";
import ExpenseItem from "../../components/expenseItem";
import Input from "../../components/input";
import Nav from "../../components/nav";
import {getCafes} from "../../actions/cafeActions";
import Loader from "../../components/loader";
import Button from "../../components/button";

class categoryExpanseScene extends Component {

	constructor(){
		super();
		this.state = {cafes:[], loading: false}
	}

	componentWillMount(){

		this.setState({loading: true});
		getCafes()
			.then(cafes =>{
				this.setState({cafes})
			}).catch(error =>{
				console.log(error);
			}).finally((val) =>{
				this.setState({loading: false});
			})
	}

	renderCafes(){
		return this.state.cafes.map(cafe => (
			<TouchableOpacity key={cafe.id}>
				<Text>{cafe.name}</Text>
				<Text>{cafe.description}</Text>
			</TouchableOpacity>
		))
	}

	render(){
		return (
			<View style = { styles.container }>
				<ScrollView style= { [styles.content, styles.topInner] } >
					{/*{this.renderCafes()}*/}
					{/*{this.state.loading?<Loader/>:null}*/}
					<View style= { styles.expenseItemWrapper } >
						<ExpenseItem>Категорія 1</ExpenseItem>
						<ExpenseItem>Категорія 2</ExpenseItem>
						<ExpenseItem>Категорія 3</ExpenseItem>
						<ExpenseItem>Категорія 4</ExpenseItem>
					</View>
					<View style={styles.subtitle_wrapper}>
						<Text style={styles.subtitle}>Нова категорія</Text>
					</View>
					<Input value="Категорія 1" />
					<View style= { styles.navigation } >
						<Button text="Додати"/>
					</View>
				</ScrollView>
				<Nav/>
			</View>
		);
	}
}

export default categoryExpanseScene;