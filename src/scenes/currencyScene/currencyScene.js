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
	}

	render(){
		return (
			<View style = { styles.container }>
				<ScrollView style= { styles.content } >
					<Text>Currency module</Text>
				</ScrollView>

				<Nav/>
			</View>
		);
	}
}
export default connect(({auth})=>{ return {auth}}, { signOut})(App);