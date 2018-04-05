import { View, Text, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';

import styles from "../../themes/styles";
import Button from "../../components/button";
import Header from "../../components/header";
import Nav from "../../components/nav";
import Homebox from "../../components/homebox";
import style_module from "./styles";

class App extends Component{
	render(){
		return (
			<View style = { styles.container }>
				<Header title="CLEVER MONEY" />
				<View style = { style_module.containerHome }>
					<Homebox text="some text" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
					<Homebox text="Another text" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
					<Homebox text="BIG TEXT" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
					<Homebox text="Add expenses" pic={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
				</View>
				<Nav />
			</View>
		);
	}
}

export default App;