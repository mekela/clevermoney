import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import SelectInput from 'react-native-select-input-ios';

import styles from "../../themes/styles";
import style_module from "./styles";
import Nav from "../../components/nav";
import Loader from "../../components/loader";
import CostRow from "../../components/costRow";
import {connect} from "react-redux";
import {getCategories, getCosts} from "../../actions";
import ExpenseItem from "../../components/expenseItem";

class App extends Component{
	constructor(props) {
		super(props);

		this.state = {
			filterType: 0,
			activeFilter: 'expense-days-30',
			activeFilterType: 'days',
			activeFilterParam: 30,
			valueSmall1: 1,
			valueLarge:  2,
			loading: false,
			filterDaysData:[30, 60, 90, 180]
		};
	}
	onSubmitEditingSmall0(value) {
		this.setState({
			filterType: value,
		});
		console.log('Select', value);
	}

	getPickerOptions() {
		return [
			{ value: 0, label: 'По днях'      },
			{ value: 1, label: 'По місяцях'     },
			{ value: 2, label: 'По роках' }
		];
	}

	componentWillMount() {
		this.setState({loading:true})
		this.props.getCategories().finally(()=> {
			this.props.getCosts().finally(() => {
				this.setState({loading: false})
			});
		});
	}

	timeDifference(current, previous) {
		var msPerMinute = 60 * 1000;
		var msPerHour = msPerMinute * 60;
		var msPerDay = msPerHour * 24;
		var elapsed = current - previous;
		if (elapsed < msPerMinute) {
			return Math.round(elapsed/1000) + ' seconds ago';
		}
		return Math.round(elapsed/msPerDay);
	}

	makeActive(newFilter, newType, newParam){
		this.setState({ activeFilter: newFilter });
		this.setState({ activeFilterType: newType });
		this.setState({ activeFilterParam: newParam });
	}
	Filter(filter) {
		if(filter == 0){
			const filterList = this.state.filterDaysData.map((data) => {
				return (
					<ExpenseItem key={`expense-days-${data}`} changeActive = {true} activeItem = {this.state.activeFilter == `expense-days-${data}`} clickActive = {this.makeActive.bind(this, `expense-days-${data}`, 'days', data)}>Останні {`${data}`} днів</ExpenseItem>
				)
			})

			return (
				<ScrollView style={[ style_module.monthWrapper]}>
					<View style= { styles.expenseItemWrapper } >
						{filterList}
					</View>
				</ScrollView>
			);
		}else if(filter == 1){
			let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			let filterMonthsData = [];
			let today = new Date();
			let year = today.getFullYear();
			let month = today.getMonth();

			let i = 0;
			do {
				filterMonthsData.push(monthNames[month] + " " + year);
				if (month == 0) {
					month = 11;
					year--;
				} else {
					month--;
				}

				i++;
			} while (i < 60);
			const filterList = filterMonthsData.map((data) => {
				return (
					<ExpenseItem key={`expense-months-${data}`} changeActive = {true} activeItem = {this.state.activeFilter == `expense-months-${data}`} clickActive = {this.makeActive.bind(this, `expense-months-${data}`,'months', data)}>{`${data}`}</ExpenseItem>
				)
			})

			return (
				<ScrollView style={[ style_module.monthWrapper]}>
					<View style= { styles.expenseItemWrapper } >
						{filterList}
					</View>
				</ScrollView>

			);
		}else if(filter == 2){
			let filterYearData = [];
			let today = new Date();
			let year = today.getFullYear();

			let i = 0;
			do {
				filterYearData.push(year);
				year--;
				i++;
			} while (i < 5);
			const filterList = filterYearData.map((data) => {
				return (
					<ExpenseItem key={`expense-year-${data}`} changeActive = {true} activeItem = {this.state.activeFilter == `expense-year-${data}`} clickActive = {this.makeActive.bind(this, `expense-year-${data}`,'years', data)}>{`${data}`}</ExpenseItem>
				)
			})
			return (

				<ScrollView style={[ style_module.monthWrapper]}>
					<View style= { styles.expenseItemWrapper } >
						{filterList}
					</View>
				</ScrollView>

			);
		}
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

			if(this.state.activeFilterType == 'days'){
				let date = new Date();
				date.setDate(date.getDate());
				if (this.timeDifference(+ date, this.props.costs.costs.byDates[data].timestamp) <= this.state.activeFilterParam){
					return (
						<CostRow key={`cost-${data}`} text={title} costs={[cost,' ',this.props.auth.currency]} smallRow={type}></CostRow>
					)
				}
			}else if(this.state.activeFilterType == 'months'){
				let month_title = (new Date(this.state.activeFilterParam).getMonth()+'/'+new Date(this.state.activeFilterParam).getFullYear());
				let current_month_title = (new Date(this.props.costs.costs.byDates[data].timestamp).getMonth()+'/'+new Date(this.props.costs.costs.byDates[data].timestamp).getFullYear());
				if(month_title == current_month_title){
					return (
						<CostRow key={`cost-${data}`} text={title} costs={[cost,' ',this.props.auth.currency]} smallRow={type}></CostRow>
					)
				}
			}else if(this.state.activeFilterType == 'years'){
				let year_title = this.state.activeFilterParam;
				let current_year_title = new Date(this.props.costs.costs.byDates[data].timestamp).getFullYear();

				if(year_title == current_year_title){
					return (
						<CostRow key={`cost-${data}`} text={title} costs={[cost,' ',this.props.auth.currency]} smallRow={type}></CostRow>
					)
				}
			}


		});
	}


	render() {
		let state = this.state;

		return (
			<View style = { [styles.container] }>
				<ScrollView style= { [styles.content] } >
					<View style={[style_module.containerBackground, style_module.selectTitleWrapper]}>
						<Text style={style_module.selectTitleContent}>Фільтрувати</Text>
					</View>
					<View style={[style_module.containerBackground, style_module.selectWrapper]}>
						<SelectInput
							value={state.filterType}
							options={this.getPickerOptions()}
							onCancelEditing={() => console.log('onCancel')}
							onSubmitEditing={this.onSubmitEditingSmall0.bind(this)}
							color={'red'}
							style={[style_module.selectInput, style_module.selectInputSmall]}
						/>
						<Icon name='chevron-down' size={25} color="#3c3c3c"></Icon>
					</View>

					{  this.Filter(state.filterType) }

					<View style = { style_module.costs_wrapper }>
						{this.state.loading ? <Loader/> : this.renderCosts()}
					</View>
				</ScrollView>
				<Nav active = {'chart'}/>
			</View>
		);
	}
}

export default connect(({costs, categories, auth})=>{ return {costs, categories, auth}}, { getCosts, getCategories })(App);