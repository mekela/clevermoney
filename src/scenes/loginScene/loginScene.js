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
import {signIn, changeAuthData, signOut} from "../../actions"
import { LoginButton } from 'react-native-fbsdk';
import FBLoginButton from "../../components/FBLoginButton";

class App extends Component{
	constructor(){
		super();
		this.state = {
			loading: false,
		}
	}
	componentWillMount(){
		// if(this.props.auth.email){
		//
		// }

	}

	changeAuthData(field,value){
		this.props.changeAuthData(field,value);
	}
	loginButtonPress() {
		this.setState({loading: true});
		this.props.signIn(this.props.auth)
			.then(Actions.homepageScene)
			.catch(error=>{alert(error)})
			.finally(() => {
				this.setState({loading: false})
			});
	}
	logoutButtonPress(){
		this.props.signOut();
	}
	renderLogoutForm(){
		return(
			<View style={style_module.socialLoginWrapper}>
				<Text>Ви вже залоговані</Text>
				<Button text="Вийти" click={this.logoutButtonPress.bind(this)} ></Button>
			</View>
		)
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
					autoCapitalize = 'none'
					keyboardType="email-address"
				/>

				<Input
					placeholder="Password"
					additionalStyle={ style_module.inputForm }
					onChangeText={(password) => this.changeAuthData('password',password)}
					autoCapitalize = 'none'
					secureTextEntry = {true}
					autoCapitalize = 'none'
					value={this.props.auth.password}
				/>
				<Button text="Увійти" click={this.loginButtonPress.bind(this)} />

				{/*<Button text="Facebook" click={this.loginButtonPress.bind(this)} />*/}
				{/*<FBLoginButton />*/}
				{/*<View >*/}
					{/*<LoginButton*/}
						{/*readPermissions={["public_profile email"]}*/}
						{/*onLoginFinished={this.loginFinished.bind(this)}*/}
						{/*onLogoutFinished={() => alert("User logged out")}*/}
					{/*/>*/}
				{/*</View>*/}

				{/*<View style={style_module.socialLoginWrapper}>*/}
					{/*<Text>або увійти через</Text>*/}
					{/*<TouchableOpacity onPress = {Actions.addExpensesScene}>*/}
						{/*<Icon name="sc-facebook" size={35} color="#3b5998"></Icon>*/}
					{/*</TouchableOpacity>*/}
				{/*</View>*/}
			</View>
		)
	}
	loginFinished (error, result) {
		if (error) {
			console.log(error)
			alert("Login failed with error: " + error);
		} else if (result.isCancelled) {
			alert("Login was cancelled");
		} else {
			alert("Login was successful with permissions: " + result)
		}
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
					{!this.props.auth.userLogin ?
						this.state.loading ? <Loader/> : this.renderForm() :
						this.state.loading ? <Loader/> : this.renderLogoutForm()
					}



				</ScrollView>
				{!this.props.auth.userLogin ?
					<View style={styles.navBar}>
						<TouchableOpacity style={styles.tabItem} onPress={Actions.loginScene}>
							<Icon name='arrow-right' size={35} color="#3c3c3c"></Icon>
							<Text style={[styles.tabTitle, styles.tabTitleActive]}>Увійти</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.tabItem} onPress={Actions.registerScene} >
							<Icon name='lock' size={35} color="#b7b7b7"></Icon>
							<Text style={styles.tabTitle}>Зареєструватися</Text>
						</TouchableOpacity>
					</View> :
					null
				}
				{/*<View style= { styles.navigation } >*/}
					{/*<Button text="LOGIN" goToScene = "wizardScene" />*/}
					{/*<Text>or</Text>*/}
					{/*<Button text="Register" goToScene = "registerScene" />*/}
				{/*</View>*/}
			</View>
		);
	}
}

export default connect(({auth})=>{ return {auth}}, { signIn, changeAuthData, signOut })(App);