import { View, Text} from "react-native";
import React from 'react';
import styles from "../themes/styles";
import Icon from "react-native-vector-icons/EvilIcons";


const ExpenseItem = (props) => (
    <View style={styles.expenseItem}>
        <Text style={styles.expenseItemText}>{props.children}</Text>
        <Icon name="close-o" size={30} color="#fff"></Icon>
    </View>

  )


export default ExpenseItem;