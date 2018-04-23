import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import loginScene from './scenes/loginScene/loginScene';
import wizardScene from './scenes/wizardScene/wizardScene';
import homepageScene from './scenes/homepageScene/homepageScene';
import addExpensesScene from './scenes/addExpensesScene/addExpensesScene';
import categoryExpensesScene from './scenes/categoryExpensesScene/categoryExpensesScene';
import profileScene from './scenes/profileScene/profileScene';
import statisticExpensesScene from './scenes/statisticExpensesScene/statisticExpensesScene';

export default class router extends Component {
	render() {
		return (
			<Router >
				<Scene key="root">
					<Scene key="loginScene" component={loginScene} initial title="Авторизація" hideNavBar = {true}/>
					<Scene key="wizardScene" component={wizardScene} title="Ознайомлення" hideNavBar = {true}/>
					<Scene key="homepageScene" component={homepageScene}   title="Головна" hideNavBar = {true}/>
					<Scene key="addExpensesScene" component={addExpensesScene} title="Додати витрати" hideNavBar = {false}/>
					<Scene key="categoryExpensesScene" component={categoryExpensesScene} title="Категорії витрат" hideNavBar = {false}/>
					<Scene key="profileScene" component={profileScene} title="Профіль" hideNavBar = {false}/>
					<Scene key="statisticExpensesScene" component={statisticExpensesScene}  title="Статистика" hideNavBar = {false}/>
				</Scene>
			</Router>
		)
	}
}