import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from "../../themes/styles";
import Input from "../../components/input";
import Button from "../../components/button";
import style_module from "./styles";
import Nav from "../../components/nav";
import Loader from "../../components/loader";
import ExpenseItem from "../../components/expenseItem";
import {getCategories, addCost, removeCost, makeActive, getCosts} from "../../actions";
import {connect} from "react-redux";
import Toaster from "../../components/toaster";
import CostRow from "../../components/costRow";
import DatePicker from "react-native-datepicker";

class addExpanseScene extends Component {
	constructor(){
		let curDate = new Date();
		super()
		this.state={
			loading: false,
			newCost: '',
			date: curDate.getFullYear()+'-'+(curDate.getMonth() + 1)+'-'+curDate.getDate()+' '+curDate.getHours()+':'+curDate.getMinutes()+':'+curDate.getSeconds()
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
	addCosts(){
		this.props.addCost({price: this.state.newCost, category: this.props.categories.categories.current, date: this.state.date})
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

	renderCosts() {
		return this.props.costs.costs.allDates.map((data) => {
			if(this.props.costs.costs.byDates[data].title == (new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear())) {
				let title = this.props.costs.costs.byDates[data].title;
				let cost = this.props.costs.costs.byDates[data].value;
				let type = false;
				if (this.props.costs.costs.byDates[data].type == 'small') {
					type = true;
					title = this.props.categories.categories.byIds[this.props.costs.costs.byIds[this.props.costs.costs.byDates[data].id].category].title
				} else {
					let currDateString = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
					let prevDateString = (new Date().getDate() - 1) + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
					if (title == currDateString) {
						title = 'Сьогодні';
					} else if (title == prevDateString) {
						title = 'Вчора';
					}
					cost = this.props.costs.costs.byDatesTitle[this.props.costs.costs.byDates[data].title].price
				}


				return (
					<CostRow key={`cost-${data}`} text={title} costs={[cost, ' ', this.props.auth.currency]} smallRow={type}></CostRow>
				)
			}
		});
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
					<View style= { styles.titleWrapper }>
						<Text style={style_module.addExpensesSubTitle} >Виберіть дату та час:</Text>
					</View>
					<View style= { styles.expenseItemWrapper } >
						<DatePicker
							style={{width: 200}}
							date={this.state.date}
							mode="datetime"
							placeholder="select date"
							format="YYYY-MM-DD HH:mm"
							// minDate="2016-05-01"
							maxDate={this.state.date}
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							is24Hour={true}
							customStyles={{
								dateIcon: {
									position: 'absolute',
									right: 0,
									top: 4,
									marginRight: 0
								},
								dateInput: styles.inputWrapper
								// ... You can check the source to find the other keys.
							}}
							onDateChange={(date) => {this.setState({date: date})}}
						/>
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

					<View style={styles.subtitle_wrapper}>
						<Text style={styles.subtitle}>Сьогоднішні витрати:</Text>
					</View>
					<View style = { style_module.subtitle_wrapper }>
						{this.state.loading ? <Loader/> : this.renderCosts()}
					</View>
				</ScrollView>
				<Nav active = {'check'}/>
			</View>
		);
	}
}

export default connect(({categories, auth, costs})=>{ return {categories, auth, costs}}, { getCategories, addCost, removeCost, makeActive, getCosts})(addExpanseScene);
