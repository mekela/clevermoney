import {ScrollView, View, Text} from "react-native";
import React, {Component} from "react";
import {connect} from 'react-redux';

import styles from "../../themes/styles";
import ExpenseItem from "../../components/expenseItem";
import Button from "../../components/button";
import Input from "../../components/input";
import Nav from "../../components/nav";
import {getCategories, removeCategory, addCategory} from "../../actions"
import Loader from "../../components/loader";

class categoryExpanseScene extends Component {
	constructor(){
		super()
		this.state={
			loading: false,
			newCategory: ''
		}
	}
	removeCategory(id) {
		this.setState({loading:true})
		this.props.removeCategory(id).finally(()=>{
			this.setState({loading:false})
		});
	}
	addCategory() {
		this.props.addCategory({title: this.state.newCategory});
	}
	componentWillMount() {
		this.setState({loading:true})
		this.props.getCategories().finally(()=>{
			this.setState({loading:false})
		});
	}

	renderCategories() {
		//console.log(this.props.categories.categories);
		return this.props.categories.categories.allIds.map((data) => {
			return (
				<ExpenseItem key={`expense-${data}`} click = {this.removeCategory.bind(this, data)}>{this.props.categories.categories.byIds[data].title}</ExpenseItem>
			)
		})
	}


	render(){
		return (
			<View style = { styles.container }>
				<ScrollView style= { [styles.content, styles.topInner] } >
					<View style= { styles.expenseItemWrapper } >
						{this.state.loading ? <Loader/> : this.renderCategories()}
					</View>
					<View style={styles.subtitle_wrapper}>
						<Text style={styles.subtitle}>Нова категорія:</Text>
					</View>
					<Input
						placeholder="Нова категорія"
						onChangeText={(newCategory) => this.setState({newCategory})}
						value=""/>
					<View style= { styles.navigation } >
						<Button text="Додати" click={this.addCategory.bind(this)}/>
					</View>
				</ScrollView>
				<Nav/>
			</View>
		);
	}
}

export default connect(({categories})=>{ return {categories}}, { getCategories, removeCategory, addCategory})(categoryExpanseScene);
