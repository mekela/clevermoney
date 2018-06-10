import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';

import styles from "../../themes/styles";
import Button from "../../components/button";
import Header from "../../components/header";
import Nav from "../../components/nav";
import Homebox from "../../components/homebox";
import style_module from "./styles";
import {Actions} from "react-native-router-flux";
import CostRow from "../../components/costRow";
import Icon from "react-native-vector-icons/EvilIcons";

class App extends Component{
	render(){
		return (
			<View style = { styles.container }>
				<ScrollView style= { [styles.content, styles.topInner] } >
					<View style = { style_module.monthly_budget_wrapper }>
						<Text style = { style_module.monthly_budget_text }>Місячний бюджет</Text>
						<Text style = { style_module.monthly_budget_cost }> 5750.00 грн.</Text>
					</View>
					<View style = { style_module.costs_wrapper }>
						<CostRow text={'Сьогодні'} costs={'300.00 грн'}></CostRow>
						<CostRow text={'Авто'} costs={'34530.00 грн'} smallRow={true}></CostRow>
						<CostRow text={'Продукти'} costs={'300.00 грн'} smallRow={true}></CostRow>
						<CostRow text={'Авто'} costs={'30.00 грн'} smallRow={true}></CostRow>
						<CostRow text={'Аптека'} costs={'100.50 грн'} smallRow={true}></CostRow>
						<CostRow text={'Вчора'} costs={'300.00 грн'}></CostRow>
						<CostRow text={'Авто'} costs={'34530.00 грн'} smallRow={true}></CostRow>
						<CostRow text={'Продукти'} costs={'300.00 грн'} smallRow={true}></CostRow>
						<CostRow text={'Авто'} costs={'30.00 грн'} smallRow={true}></CostRow>
						<CostRow text={'Аптека'} costs={'100.50 грн'} smallRow={true}></CostRow>
					</View>
				</ScrollView>
				<View style={styles.add_cost_icon} >
					<TouchableOpacity>
						<Icon name="plus" size={65} color="#4de1d3"></Icon>
					</TouchableOpacity>
				</View>
				{/*<Header title="CLEVER MONEY" />*/}
				{/*<View style = { style_module.containerHome }>*/}
					{/*<Homebox  press={Actions.addExpensesScene}  text="Додати витрати" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>*/}
					{/*<Homebox  press={Actions.statisticExpensesScene}  text="Статистика" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>*/}
					{/*<Homebox  press={Actions.categoryExpensesScene}  text="Категорії" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>*/}
					{/*<Homebox  press={Actions.profileScene}   text="Мій профіль" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>*/}
				{/*</View>*/}
				<Nav active = {'trophy'} />
			</View>
		);
	}
}

export default App;