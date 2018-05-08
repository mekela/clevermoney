import {View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "../../themes/styles";
import Input from "../../components/input";
import Button from "../../components/button";
import style_module from "./styles";
import Icon from "react-native-vector-icons/EvilIcons";
import Loader from "../../components/loader";
import {signIn, changeAuthData} from "../actions"

class App extends Component{
	constructor(){
		super();
		this.state = {
			loading: false,
		}
	}
	componentWillMount(){
		console.log('props',this.props);
	}

	changeAuthData(field,value){
		this.props.changeAuthData(field,value);
	}
	loginButtonPress() {
		this.setState({loading: true});

		this.props.signIn(this.props.auth)
			.then(Actions.profile)
			.catch(error=>{alert(error)})
			.finally(() => {
				this.setState({loading: false})
			});
	}
	renderForm() {
		return (
			<View>
				{/*<View style={styles.top}>*/}
					{/*<Image style={styles.logo}*/}
					       {/*source={require('../themes/logo.png')}*/}
					{/*/>*/}
					{/*<Text style={styles.companyName}>*/}
						{/*Awesome company*/}
					{/*</Text>*/}
				{/*</View>*/}
				<Input
					placeholder="Email"
					additionalStyle={ style_module.inputForm }
					onChangeText={(email) => this.changeAuthData('email',email)}
					value={this.props.auth.email}
					keyboardType="email-address"
				/>

				<Input
					placeholder="Password"
					additionalStyle={ style_module.inputForm }
					onChangeText={(password) => this.changeAuthData('password',password)}
					value={this.props.auth.password}
				/>
				<Button text="Увійти" click={this.loginButtonPress.bind(this)} />
			</View>
		)
	}
	render(){
		return (
			<View style = { styles.container }>
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
						<Icon name='arrow-right' size={35} color="#3c3c3c"></Icon>
						<Text style={[styles.tabTitle, styles.tabTitleActive]}>Увійти</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem} onPress={Actions.registerScene} >
						<Icon name='lock' size={35} color="#b7b7b7"></Icon>
						<Text style={styles.tabTitle}>Зареєструватися</Text>
					</TouchableOpacity>
				</View>
				{/*<View style= { styles.navigation } >*/}
					{/*<Button text="LOGIN" goToScene = "wizardScene" />*/}
					{/*<Text>or</Text>*/}
					{/*<Button text="Register" goToScene = "registerScene" />*/}
				{/*</View>*/}
			</View>
		);
	}
}

export default connect(({auth})=>{ return {auth}}, { changeAuthData, signIn })(App);