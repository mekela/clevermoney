import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import React, { Component } from 'react';

import styles from "../../themes/styles";
import Input from "../../components/input";
import Button from "../../components/button";
import style_module from "./styles";

class App extends Component{
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

					<Input placeholder="Email"  additionalStyle={ style_module.inputForm } />

					<Input placeholder="Password"  additionalStyle={ style_module.inputForm } /> 

				</ScrollView>
				<View style= { styles.navigation } >
					<Button text="LOGIN"/>
				</View>
			</View>
		);
	}
}

export default App;