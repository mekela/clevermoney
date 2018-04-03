import { View, Text} from "react-native";
import React from 'react';
import styles from "../themes/styles";


const ExpenseItem = (props) => (

    <Text style={[styles.expenseItem]}>
	    {props.children}
    </Text>

  )


export default ExpenseItem;