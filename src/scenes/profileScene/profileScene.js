import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import styles from "../../themes/styles";
import style_module from "./styles";
import Input from "../../components/input";
import Button from "../../components/button";
import Nav from "../../components/nav";
import Icon from "react-native-vector-icons/EvilIcons";

export default class App extends React.Component {
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
					       source={require('../../../assets/cat.jpg')}
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
					<View style={style_module.form_title_wrapper}>
						<Text style={style_module.form_title}>Замінити пароль</Text>
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
						<Button text="Оновити"/>
					</View>
				</ScrollView>

				<Nav/>
			</View>
		);
	}
}