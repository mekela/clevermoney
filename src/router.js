import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';

import loginScene from './scenes/loginScene/loginScene';
import registerScene from './scenes/registerScene/registerScene';
import wizardScene from './scenes/wizardScene/wizardScene';
import homepageScene from './scenes/homepageScene/homepageScene';
import addExpensesScene from './scenes/addExpensesScene/addExpensesScene';
import categoryExpensesScene from './scenes/categoryExpensesScene/categoryExpensesScene';
import profileScene from './scenes/profileScene/profileScene';
import currencyScene from './scenes/currencyScene/currencyScene';
import statisticExpensesScene from './scenes/statisticExpensesScene/statisticExpensesScene';
import parserScene from './scenes/parserScene/parserScene';

const Routers = () => <Router>
	<Scene key="root">
		<Stack key="unregistered">
			<Scene
				initial
				key="loginScene"
				component={loginScene}
				title="Авторизація"
				hideNavBar = {true}/>
			<Scene
				key="registerScene"
				component={registerScene}
				title="Реєстрація"
				hideNavBar = {true}/>
			<Scene
				key="wizardScene"
				component={wizardScene}
				title="Ознайомлення"
				hideNavBar = {true}/>
			<Scene
				key="homepageScene"
				component={homepageScene}
				title="Головна"
				hideNavBar = {true}/>
			<Scene
				key="addExpensesScene"
				component={addExpensesScene}
				title="Додати витрати"
				hideNavBar = {false}/>
			<Scene
				key="categoryExpensesScene"
				component={categoryExpensesScene}
				title="Категорії витрат"
				hideNavBar = {false}/>
			<Scene
				key="profileScene"
				component={profileScene}
				title="Профіль"
				hideNavBar = {false}/>
			<Scene
				key="currencyScene"
				component={currencyScene}
				title="Валюта"
				hideNavBar = {false}/>
			<Scene
				key="statisticExpensesScene"
				component={statisticExpensesScene}
				title="Статистика"
				hideNavBar = {false}/>
		</Stack>

	</Scene>
</Router>;

export default Routers;


// export default class router extends Component {
// 	render() {
// 		return (
// 			<Router >
// 				<Scene key="root">
// 					<Scene
// 						initial
// 						key="loginScene"
// 						component={loginScene}
// 						title="Авторизація"
// 						hideNavBar = {true}/>
// 					<Scene
// 						key="registerScene"
// 						component={registerScene}
// 						title="Реєстрація"
// 						hideNavBar = {true}/>
// 					<Scene
// 						key="wizardScene"
// 						component={wizardScene}
// 						title="Ознайомлення"
// 						hideNavBar = {true}/>
// 					<Scene
// 						key="homepageScene"
// 						component={homepageScene}
// 						title="Головна"
// 						hideNavBar = {true}/>
// 					<Scene
// 						key="addExpensesScene"
// 						component={addExpensesScene}
// 						title="Додати витрати"
// 						hideNavBar = {false}/>
// 					<Scene
// 						key="categoryExpensesScene"
// 						component={categoryExpensesScene}
// 						title="Категорії витрат"
// 						hideNavBar = {false}/>
// 					<Scene
// 						key="profileScene"
// 						component={profileScene}
// 						title="Профіль"
// 						hideNavBar = {false}/>
// 					<Scene
// 						key="statisticExpensesScene"
// 						component={statisticExpensesScene}
// 						title="Статистика"
// 						hideNavBar = {false}/>
// 					{/*<Scene*/}
// 						{/*initial*/}
// 						{/*key="parserScene"*/}
// 						{/*component={parserScene}*/}
// 						{/*title="Парсер"*/}
// 						{/*hideNavBar = {false}/>*/}
// 				</Scene>
// 			</Router>
// 		)
// 	}
// }