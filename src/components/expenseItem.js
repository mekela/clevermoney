import {View, Text, TouchableOpacity} from "react-native";
import React from 'react';
import styles from "../themes/styles";
import Icon from "react-native-vector-icons/EvilIcons";


const ExpenseItem = (props) => {
    const Elenent = props.changeActive? TouchableOpacity: View;
    const activeItem = props.activeItem? styles.expenseItemActive: '';
    return (
		<Elenent style={[styles.expenseItem, activeItem]} onPress={props.clickActive}>
			<Text style={styles.expenseItemText}>{props.children} {props.editable}</Text>
			{props.editable &&
			<TouchableOpacity onPress={props.click}>
				<Icon name="close-o" size={30} color="#fff"></Icon>
			</TouchableOpacity>}
		</Elenent>

	)
}

export default ExpenseItem;