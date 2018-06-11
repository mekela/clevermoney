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
			this.props.getCosts(10).finally(() => {
				console.log(this.props);
				this.setState({loading: false})
			});
		});
	}

	renderCosts2() {
		return this.props.costs.costs.allIds.map((data) => {
			let myDate = new Date(this.props.costs.costs.byIds[data].timestamp);
			let myDateString = myDate.getDate()+'/'+(myDate.getMonth()+1)+'/'+myDate.getFullYear() +' '+ myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() ;
			return (
				<CostRow key={`cost-${data}`} text={[
					this.props.categories.categories.byIds[this.props.costs.costs.byIds[data].category].title,
					' ',
					myDateString,
					' ',

				]} costs={this.props.costs.costs.byIds[data].price} smallRow={true}></CostRow>
			)
		})
	}

	renderCosts() {
		return this.props.costs.costs.allDates.map((data) => {
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
						<Text style = { style_module.monthly_budget_cost }> 5750.00 грн.</Text>
					</View>
					<View style = { style_module.costs_wrapper }>
						{this.state.loading ? <Loader/> : this.renderCosts()}
						{/*<CostRow text={'Сьогодні'} costs={'300.00 грн'}></CostRow>*/}
						{/*<CostRow text={'Авто'} costs={'34530.00 грн'} smallRow={true}></CostRow>*/}
						{/*<CostRow text={'Продукти'} costs={'300.00 грн'} smallRow={true}></CostRow>*/}
						{/*<CostRow text={'Авто'} costs={'30.00 грн'} smallRow={true}></CostRow>*/}
						{/*<CostRow text={'Аптека'} costs={'100.50 грн'} smallRow={true}></CostRow>*/}
						{/*<CostRow text={'Вчора'} costs={'300.00 грн'}></CostRow>*/}
						{/*<CostRow text={'Авто'} costs={'34530.00 грн'} smallRow={true}></CostRow>*/}
						{/*<CostRow text={'Продукти'} costs={'300.00 грн'} smallRow={true}></CostRow>*/}
						{/*<CostRow text={'Авто'} costs={'30.00 грн'} smallRow={true}></CostRow>*/}
						{/*<CostRow text={'Аптека'} costs={'100.50 грн'} smallRow={true}></CostRow>*/}
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