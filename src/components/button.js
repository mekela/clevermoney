import { TouchableOpacity, Text} from "react-native";
import React, { Component } from 'react';
import styles from "../themes/styles";
import {Actions} from "react-native-router-flux";

const Button = (props)=>(
	<TouchableOpacity
		elevation={5} 
		style={ styles.button }
		onPress={ props.click }
	>
		<Text style={ styles.buttonInside }> { props.text } </Text>
	</TouchableOpacity>
);

export default Button;