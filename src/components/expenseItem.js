import {View, Text, TouchableOpacity} from "react-native";
import React from 'react';
import styles from "../themes/styles";
import Icon from "react-native-vector-icons/EvilIcons";


const ExpenseItem = (props) => (
    <TouchableOpacity style={styles.expenseItem} onPress={ props.click }>
        <Text style={styles.expenseItemText}>{props.children}</Text>
        <Icon name="close-o" size={30} color="#fff"></Icon>
    </TouchableOpacity>

  )


export default ExpenseItem;