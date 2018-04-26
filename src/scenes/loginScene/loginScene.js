import { View, Text, Image, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/EvilIcons";
import {signIn} from "../../actions";

import styles from "../../themes/styles";
import Input from "../../components/input";
import Button from "../../components/button";
import Loader from "../../components/loader";
import style_module from "./styles";

class App extends Component{
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			loading: false,
		}
	}

	loginButtonPress() {
		this.setState({loading: true});

		signIn(this.state)
			.then(Actions.list)
			.catch(error=>{alert(error)})
			.finally(() => {
				this.setState({loading: false})
			});
	}

	renderForm() {
		return ( 
			<View>
				<Input onChangeText={(email) => this.setState({email})}
					   value={this.state.email}
					   placeholder="Email"
					   keyboardType="email-address"
					   additionalStyle={ style_module.inputForm } />
				<Input onChangeText={(password) => this.setState({password})}
					   value={this.state.password}
					   secureTextEntry={true}
					   placeholder="Пароль"
					   additionalStyle={ style_module.inputForm } />
				<View>
					<TouchableOpacity onPress={Actions.signScene}>
						<Text style={styles.signUpLink}>Реєстрація</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	render(){
		return (
			<View style = { styles.container }>
				<ScrollView style= { style_module.loginForm } >
				<ImageBackground source={require('../../../assets/bgLogin.jpg')} style= { style_module.bgLogin } >
					<View style= { style_module.loginImageWrap } >
						<Image source={require('../../../assets/clover.png')}
							   style= { style_module.loginImage }  />
					</View>
				</ImageBackground>

					<View>
						{this.state.loading ? <Loader/> : this.renderForm()}
						<Button text="Увійти" click={this.loginButtonPress.bind(this)} />
					</View>
				</ScrollView>
				<View style= { styles.navigation } >
					<Text>
						Або увійти через
					</Text>
					<View  style= { style_module.loginIcons } >
						<Icon name='sc-facebook' size={40} color="#4de1d3"/>
						<Icon name='sc-twitter' size={40} color="#4de1d3"/>
						<Icon name='sc-google-plus' size={40} color="#4de1d3"/>
					</View>
				</View>
			</View>
		);
	}
}

export default App;