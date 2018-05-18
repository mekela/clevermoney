import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from "../../themes/styles";
import style_module from "./styles";
import Input from "../../components/input";
import ButtonLink from "../../components/buttonLink";
import Button from "../../components/button";
import Nav from "../../components/nav";
import Icon from "react-native-vector-icons/EvilIcons";
import {signIn, uploadImage, signOut, checkAuth} from "../../actions"

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


	render(){
		return (
			<View style = { styles.container }>
				{/*<View style= { styles.topInner } >*/}
				{/*<Text style={ [styles.companyName, style_module.TopTitle] } >*/}
				{/*Налаштування Профіля*/}
				{/*</Text>*/}
				{/*</View>*/}

				<ScrollView style= { [styles.content, styles.topInner] } >
					<Image style={ style_module.profileImage }
					       source={this.state.url}

					/>
					<Text>Ім'я: {this.props.auth.name}</Text>
					<Text>Email: {this.props.auth.email}</Text>

					<ButtonLink text="Валюта"/>
					<ButtonLink text="Повідомлення"/>
					<ButtonLink text="Повідомити про помилку"/>

					<View style={styles.subtitle_wrapper}>
						<Text style={styles.subtitle}>Замінити пароль</Text>
					</View>
					<View style={style_module.form_label_wrapper}>
						<Text>Старий пароль</Text>
					</View>
					<Input placeholder="email" icon="user" />

					<View style={style_module.form_label_wrapper}>
						<Text>Новий пароль</Text>
					</View>
					<Input placeholder="password" icon="key" />

					<View style={style_module.form_label_wrapper}>
						<Text>Новий пароль, підтвердити</Text>
					</View>
					<Input placeholder="password" icon="key" />

					<View style= { styles.navigation } >
						<Button text="Оновити" click={this.selectImageButtonPress.bind(this)}/>
					</View>
					<Button text="Вийти" click={this.logoutButtonPress.bind(this)} ></Button>
				</ScrollView>

				<Nav/>
			</View>
		);
	}
}
export default connect(({auth})=>{ return {auth}}, { signOut})(App);