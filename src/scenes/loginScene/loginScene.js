import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/EvilIcons";

import styles from "../../themes/styles";
import Input from "../../components/input";
import Button from "../../components/button";
import style_module from "./styles";

class App extends Component{
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
					<Input placeholder="Email"  additionalStyle={ style_module.inputForm } />
					<Input placeholder="Пароль"  additionalStyle={ style_module.inputForm } />
					<Button text="Увійти" goToScene = "wizardScene" />
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