import { TouchableOpacity, Text} from "react-native";
import React, { Component } from 'react';
import styles from "../themes/styles";
import {Actions} from "react-native-router-flux";

class Button extends Component {
    buttonClick(){
	    Actions[this.props.goToScene].call();
    }
	render() {
		return (
			<TouchableOpacity
				elevation={5}
				style={ styles.button }
				onPress={ this.buttonClick.bind(this)}
			>
				<Text style={ styles.buttonInside }> { this.props.text } </Text>
			</TouchableOpacity>
        )
	}
}

export default Button;