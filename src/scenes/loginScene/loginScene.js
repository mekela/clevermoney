import { AppRegistry, PixelRatio, View, Text, Image, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/EvilIcons";
import ImagePicker from "react-native-image-picker";
import {signIn} from "../../actions";

import styles from "../../themes/styles";
import Input from "../../components/input";
import Button from "../../components/button";
import Loader from "../../components/loader";
import style_module from "./styles";

class App extends Component{

	state = {

		ImageSource: null,

	};

	selectPhotoTapped() {
		const options = {
			quality: 1.0,
			maxWidth: 500,
			maxHeight: 500,
			storageOptions: {
				skipBackup: true
			}
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled photo picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				let source = { uri: response.uri };

				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({

					ImageSource: source

				});
			}
		});
	}

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

						<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>

							<Image source={this.state.ImageSource} style= { style_module.loginImage }  />
							<Text>Select a Photo</Text>
								 
						</TouchableOpacity>
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