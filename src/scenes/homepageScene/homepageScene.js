import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';

import styles from "../../themes/styles";
import Nav from "../../components/nav";
import style_module from "./styles";
import {Actions} from "react-native-router-flux";
import CostRow from "../../components/costRow";
import Icon from "react-native-vector-icons/EvilIcons";
import {connect} from "react-redux";
import {getCategories, getCosts} from "../../actions";
import Loader from "../../components/loader";

class homepageScene extends Component{
	constructor(){
		super()
		this.state={
			loading: false,
		}
	}

	componentWillMount() {
		this.setState({loading:true})
		this.props.getCategories().finally(()=> {
			this.props.getCosts().finally(() => {
				console.log(this.props);
				this.setState({loading: false})
			});
		});
	}

	renderCosts() {
		return this.props.costs.costs.allDates.slice(0, 10).map((data) => {
			let title = this.props.costs.costs.byDates[data].title;
			let cost = this.props.costs.costs.byDates[data].value;
			let type = false;
			if(this.props.costs.costs.byDates[data].type == 'small'){
				type = true;
				title = this.props.categories.categories.byIds[ this.props.costs.costs.byIds[this.props.costs.costs.byDates[data].id].category].title
			}else{
				let currDateString = new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear() ;
				let prevDateString = (new Date().getDate()-1)+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear() ;
				if(title == currDateString){
					title = 'Сьогодні';
				}else if(title == prevDateString){
					title = 'Вчора';
				}
				cost = this.props.costs.costs.byDatesTitle[this.props.costs.costs.byDates[data].title].price
			}


			return (
				<CostRow key={`cost-${data}`} text={title} costs={[cost,' ',this.props.auth.currency]} smallRow={type}></CostRow>
			)
		});
	}

	render(){
		return (
			<View style = { styles.container }>
				<ScrollView style= { [styles.content, styles.topInner] } >
					<View style = { style_module.monthly_budget_wrapper }>
						<Text style = { style_module.monthly_budget_text }>Місячний бюджет</Text>
						{this.state.loading ? <Loader/> :
							<Text style = { style_module.monthly_budget_cost }> {parseInt(this.props.auth.budget) - parseInt(this.props.costs.costs.monthBudget)} {this.props.auth.currency}</Text>
						}
					</View>
					<View style = { style_module.costs_wrapper }>
						{this.state.loading ? <Loader/> : this.renderCosts()}
					</View>
					<View style = { style_module.show_all_costs }>
						<TouchableOpacity onPress = {Actions.statisticExpensesScene}>
							<Text style = { style_module.show_all_costs_text}>Показати всі витрати</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				<View style={styles.add_cost_icon} >
					<TouchableOpacity onPress = {Actions.addExpensesScene}>
						<Icon name="plus" size={65} color="#4de1d3"></Icon>
					</TouchableOpacity>
				</View>
				<Nav active = {'trophy'} />
			</View>
		);
	}
}

export default connect(({costs, categories, auth})=>{ return {costs, categories, auth}}, { getCosts, getCategories })(homepageScene);