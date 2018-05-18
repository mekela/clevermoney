import {TouchableOpacity, Text, View} from "react-native";
import React from 'react';
import styles from "../themes/styles";
import Icon from "react-native-vector-icons/EvilIcons";

const Button = (props)=>(
	<TouchableOpacity
		onPress={ props.click }
	>
		{/*<Text style={ styles.buttonInside }> { props.text } </Text>*/}
		<View style={styles.list_link_wrapper}>
			<Text style={styles.list_link}>{ props.text }</Text>
			<Icon style={styles.list_icon} name="chevron-right" size={30} color="#343434"></Icon>
		</View>
	</TouchableOpacity>
);

export default Button;