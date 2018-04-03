import React from 'react';
import { ScrollView, Text, View} from 'react-native';

import styles from "../../themes/styles";
import style_module from "./styles";
import ExpenseItem from "../../components/expenseItem";
import Button from "../../components/button";
import Input from "../../components/input";

export default class App extends React.Component {
	render(){
		return (
			<View style = { styles.container }>
				<View style= { styles.topInner } >
					<Text style={ [styles.companyName, style_module.TopTitle] } >
						Категорії витрат
					</Text>
				</View>

				<ScrollView style= { styles.content } >
					<View style= { styles.expenseItemWrapper } >
						<ExpenseItem>Категорія 1</ExpenseItem>
						<ExpenseItem>Категорія 2</ExpenseItem>
						<ExpenseItem>Категорія 3</ExpenseItem>
						<ExpenseItem>Категорія 4</ExpenseItem>
					</View>
					<Text>Оновити</Text>
					<Input value="Категорія 1" />

				</ScrollView>

			</View>
		);
	}
}