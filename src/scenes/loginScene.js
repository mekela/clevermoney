import { View, Text, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';

import styles from "../themes/styles";
import Input from "../components/input";
import Button from "../components/button";

class App extends Component{
	render(){
		return (
			<View style = { styles.container }>
				<View style= { styles.top } >
					<Image style={ styles.logo }
					       source={require('../themes/logo.png')}
					/>
					<Text style={ styles.companyName } >
						Awesome company
					</Text>
				</View>

				<ScrollView style= { styles.content } >

					<Input placeholder="email" icon="user" additionalStyle={ styles.inputWrapperTop } />

					<Input placeholder="password" icon="key" additionalStyle={ styles.inputWrapperBottom } />

				</ScrollView>
				<View style= { styles.navigation } >
					<Button text="LOGIN"/>
				</View>
			</View>
		);
	}
}

export default App;