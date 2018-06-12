import {Text, View} from "react-native";
import React from 'react';
import styles from "../themes/styles";

const CostRow = (props) => {
	const smallRowWrapper = props.smallRow ? styles.list_link_wrapper_small : '';
	const smallRowText = props.smallRow ? styles.list_link_small : '';
	return (
		<View style={[styles.list_link_wrapper, styles.list_link_wrapper_cost, smallRowWrapper]}>
			<Text style={[styles.list_link, smallRowText]}>{props.text}</Text>
			<Text style={[styles.list_link, smallRowText]}>{props.costs}</Text>
		</View>
	)
}

export default CostRow;