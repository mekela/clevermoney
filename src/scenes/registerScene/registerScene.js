import {View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/EvilIcons";

import styles from "../../themes/styles";
import Input from "../../components/input";
import Button from "../../components/button";
import style_module from "./styles";
import {signUp} from "../../actions"
import Loader from "../../components/loader";

class App extends Component{
	constructor(){
		super();
		this.state = {
			name:'',
			email:'',
			password:'',
		}
	}
	signUpButtonPress() {
		this.setState({loading: true});

		signUp(this.state)
			.then(Actions.wizardScene)
			.catch(error => {
				alert(error)
			})
			.finally(() => {
				this.setState({loading: false})
			});
	}

	renderForm() {
		return (
			<View>
				<Input
					placeholder="Name"
					onChangeText={(name) => this.setState({name})}
					value={this.state.name}
					additionalStyle={ style_module.inputForm } />
				<Input
					placeholder="Email"
					onChangeText={(email) => this.setState({email})}
					value={this.state.email}
					additionalStyle={ style_module.inputForm } />
				<Input
					placeholder="Password"
					onChangeText={(password) => this.setState({password})}
					value={this.state.password}
					additionalStyle={ style_module.inputForm } />
				<Button text="Зареєструватись" click = {this.signUpButtonPress.bind(this)} />
			</View>
		)
	}


	render(){
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<ImageBackground source={require('../../../assets/bgLogin.jpg')} style= { style_module.bgLogin } >
					<View style= { style_module.loginImageWrap } >
						<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
							   style= { style_module.loginImage }  /> 
					</View>
				</ImageBackground>
				<ScrollView style= { style_module.loginForm } >
					{this.state.loading ? <Loader/> : this.renderForm()}
				</ScrollView>
				<View style={styles.navBar}>
					<TouchableOpacity style={styles.tabItem} onPress={Actions.loginScene}>
						<Icon name='arrow-right' size={35} color="#b7b7b7"></Icon>
						<Text style={styles.tabTitle}>Увійти</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem} onPress={Actions.registerScene} >
						<Icon name='lock' size={35} color="#3c3c3c"></Icon>
						<Text style={[styles.tabTitle, styles.tabTitleActive]}>Зареєструватися</Text>
					</TouchableOpacity>
				</View>
				{/*<View style= { styles.navigation } >*/}
					{/*<Button text="Register" goToScene = "wizardScene" onClick = "createUser(this.state.email, this.state.password)" />*/}
				{/*</View>*/}
			</KeyboardAvoidingView>
		);
	}
}

export default App;