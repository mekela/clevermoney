import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from "../../themes/styles";
import Input from "../../components/input";
import Button from "../../components/button";
import style_module from "./styles";
import Nav from "../../components/nav";
import Loader from "../../components/loader";
import ExpenseItem from "../../components/expenseItem";
import {getCategories, addCost, removeCost, makeActive} from "../../actions";
import {connect} from "react-redux";
import Toaster from "../../components/toaster";

class addExpanseScene extends Component {
	constructor(){
		super()
		this.state={
			loading: false,
			newCost: ''
		}
	}
	componentWillMount() {
		this.setState({loading:true})
		this.props.getCategories().finally(()=>{
			this.setState({loading:false})
		});
	}
	addCosts(){
		this.props.addCost({price: this.state.newCost, category: this.props.categories.categories.current})
			.then(()=>{
				Toaster.showMessage('Витрати додані');
			})
			.catch((error) =>{
				alert(error);
			});
	}
	makeActive(id){
		this.props.makeActive(id).then(() => {
			//console.log('props', this.props);
		});

	}
	renderCategories() {
		return this.props.categories.categories.allIds.map((data) => {
			return (
				<ExpenseItem key={`expense-${data}`} activeItem = {this.props.categories.categories.current == data} clickActive = {this.makeActive.bind(this, data)} changeActive = {true}>{this.props.categories.categories.byIds[data].title}</ExpenseItem>
			)
		})
	}

	render() {
		return (
			<View style = { styles.container }>
				<ScrollView style= { [styles.content, styles.topInner] } >
					<View style= { styles.titleWrapper }>
						<Text style={style_module.addExpensesSubTitle} >Виберіть категорію витрат:</Text>
					</View>
					<View style= { styles.expenseItemWrapper } >
						{this.state.loading ? <Loader/> : this.renderCategories()}
					</View>
					<View style={styles.subtitle_wrapper}>
						<Text style={styles.subtitle}>Додати витрати:</Text>
					</View>
					<View>
						<Input
							style={styles.inputWithCurrency}
							placeholder="Витрати"
							keyboardType = "numeric"
							onChangeText={(newCost) => this.setState({newCost})}
							value=""/>
						<Text style={styles.cyrrencyLabel}>{this.props.auth.currency}</Text>
					</View>


					{this.state.newCost!='' ? <View style= { styles.navigation } >
						<Button text="Додати" click={this.addCosts.bind(this)}/>
					</View> : null}
				</ScrollView>
				<Nav/>
			</View>
		);
	}
}

export default connect(({categories, auth})=>{ return {categories, auth}}, { getCategories, addCost, removeCost, makeActive})(addExpanseScene);
