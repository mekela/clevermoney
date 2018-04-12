import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import styles from "../../themes/styles";
import style_module from "./styles";
import Input from "../../components/input";
import Button from "../../components/button";
import Nav from "../../components/nav";

export default class App extends React.Component {
	render(){
		return (
			<View style = { styles.container }>
				<View style= { styles.topInner } >
					<Text style={ [styles.companyName, style_module.TopTitle] } >
						Налаштування Профіля
					</Text>
				</View>

				<ScrollView style= { styles.content } >
					<Image style={ style_module.profileImage }
					       source={require('../../../assets/cat.jpg')}
					/>
					<Input placeholder="email" icon="user" />
					<Input placeholder="password" icon="key" />

				</ScrollView>
				<View style= { styles.navigation } >
					<Button text="Оновити"/>
				</View>
				<Nav/>
			</View>
		);
	}
}