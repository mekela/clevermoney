import { View, Text, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';

import styles from "../../themes/styles";
import Button from "../../components/button";
import Header from "../../components/header";
import Nav from "../../components/nav";
import Homebox from "../../components/homebox";
import style_module from "./styles";
import {Actions} from "react-native-router-flux";

class App extends Component{
	render(){
		return (
			<View style = { styles.container }>
				<Header title="CLEVER MONEY" />
				<View style = { style_module.containerHome }>
					<Homebox  onPress={Actions.addExpensesScene}  text="Додати витрати" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
					<Homebox  onPress={Actions.statisticExpensesScene}  text="Статистика" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
					<Homebox  onPress={Actions.categoryExpensesScene}  text="Категорії" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
					<Homebox  onPress={Actions.profileScene}  text="Мій профіль" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
				</View>
				<Nav />
			</View>
		);
	}
}

export default App;