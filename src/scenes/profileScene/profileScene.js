import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from "../../themes/styles";
import style_module from "./styles";
import Input from "../../components/input";
import Button from "../../components/button";
import Nav from "../../components/nav";
import Icon from "react-native-vector-icons/EvilIcons";
import {uploadImage} from "../../actions"

import ImagePicker from 'react-native-image-picker';

class App extends Component{
	constructor(){
		super();
		this.state = {url : require('../../../assets/cat.jpg')}
	}
	selectImageButtonPress(){
		ImagePicker.showImagePicker({}, (response) => {
			console.log(response);
			//console.log(response.uri, response.fileName);
			uploadImage(response, response.fileName).then((link)=>{
				this.setState({
					url:{url:link}
				});
			})
		});
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
					<View style={style_module.list_link_wrapper}>
						<Text style={style_module.list_link}>Валюта</Text>
						<Icon style={style_module.list_icon} name="chevron-right" size={30} color="#343434"></Icon>
					</View>
					<View style={style_module.list_link_wrapper}>
						<Text style={style_module.list_link}>Повідомлення</Text>
						<Icon style={style_module.list_icon} name="chevron-right" size={30} color="#343434"></Icon>
					</View>
					<View style={style_module.list_link_wrapper}>
						<Text style={style_module.list_link}>Повідомити про помилку</Text>
						<Icon style={style_module.list_icon} name="chevron-right" size={30} color="#343434"></Icon>
					</View>
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
					<Button text="Вийти" ></Button>
				</ScrollView>

				<Nav/>
			</View>
		);
	}
}
export default App;