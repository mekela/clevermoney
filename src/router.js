import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import loginScene from './scenes/loginScene/loginScene';
import wizardScene from './scenes/wizardScene/wizardScene';

export default class router extends Component {
	render() {
		return (
			<Router >
				<Scene key="root">
					<Scene key="loginScene" component={loginScene} title="loginScene" initial hideNavBar = {true}/>
					<Scene key="wizardScene" component={wizardScene} title="wizardScene" hideNavBar = {true}/>
				</Scene>
			</Router>
		)
	}
}