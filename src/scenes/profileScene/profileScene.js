import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View, Linking} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from "../../themes/styles";
import style_module from "./styles";
import Input from "../../components/input";
import ButtonLink from "../../components/buttonLink";
import Button from "../../components/button";
import Nav from "../../components/nav";
import Icon from "react-native-vector-icons/EvilIcons";
import {changePassword, uploadImage, signOut, changeAuthData} from "../../actions"

import ImagePicker from 'react-native-image-picker';
import {connect} from "react-redux";

class App extends Component{
	constructor(){
		super();
		this.state = {url : require('../../../assets/cat.jpg')}
	}
	componentWillMount(){

	}

	selectImageButtonPress(){
		ImagePicker.showImagePicker({}, (response) => {
			uploadImage(response, response.fileName).then((link)=>{
				this.setState({
					url:{url:link}
				});
			})
		});
	}
	logoutButtonPress(){
		this.props.signOut();
	}
	changePasswordPress(){
		console.log(this.props);
		this.props.changePassword(this.props.auth.currentPassword, this.props.auth.newPassword);
	}
	changeAuthData(field,value){
		this.props.changeAuthData(field,value);
	}

	render(){
		return (
			<View style = { styles.container }>

				<ScrollView style= { [styles.content, styles.topInner] } >
					<View style={style_module.profileImageWrapper}>
						<Image  style={style_module.profileImage}
						       source={this.state.url}
						/>
						<TouchableOpacity style={style_module.editProfileImageWrapper}
						    onPress={this.selectImageButtonPress.bind(this)}
						>
							<Icon name='pencil' size={25} color={'#2c3e50'}  style={style_module.editProfileImageIcon}></Icon>
						</TouchableOpacity>
					</View>

					{/*<View style={style_module.strong_text_wrapper}>*/}
						{/*<Text style={style_module.strong_text}>Ім'я: </Text> <Text>{this.props.auth.name}</Text>*/}
					{/*</View>*/}
					<View style={style_module.strong_text_wrapper}>
						<Text style={style_module.strong_text}>Email: </Text> <Text>{this.props.auth.email}</Text>
					</View>

					<ButtonLink text="Валюта" click={Actions.currencyScene}/>
					{/*<ButtonLink text="Повідомлення"/>*/}
					<ButtonLink text="Повідомити про помилку" click={() => Linking.openURL('mailto:support@clevermoney.com') }
					            title="support@clevermoney.com"/>

					<View style={styles.subtitle_wrapper}>
						<Text style={styles.subtitle}>Замінити пароль</Text>
					</View>
					<View style={style_module.form_label_wrapper}>
						<Text>Старий пароль</Text>
					</View>
					<Input
						autoCapitalize = 'none'
						secureTextEntry = {true}
						placeholder="Старий пароль"
						onChangeText={(currentPassword) => this.changeAuthData('currentPassword',currentPassword)}
						value={this.props.auth.currentPassword}
					/>

					<View style={style_module.form_label_wrapper}>
						<Text>Новий пароль</Text>
					</View>
					<Input
						autoCapitalize = 'none'
						secureTextEntry = {true}
						placeholder="Новий пароль"
						onChangeText={(newPassword) => this.changeAuthData('newPassword',newPassword)}
						value={this.props.auth.newPassword}
					/>

					<View style= { styles.navigation } >
						<Button text="Змінити пароль"  click={this.changePasswordPress.bind(this)}/>
					</View>
					<Button text="Вийти" click={this.logoutButtonPress.bind(this)} ></Button>
				</ScrollView>

				<Nav/>
			</View>
		);
	}
}
export default connect(({auth})=>{ return {auth}}, { signOut, changePassword, changeAuthData})(App);