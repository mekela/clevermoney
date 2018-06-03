import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from "../../themes/styles";
import Hashtag from "../../components/hashtag";
import Input from "../../components/input";
import Button from "../../components/button";
import style_module from "./styles";

export default class App extends React.Component {
	render() {
		return (
			<View >
				<View>
					<Text style={style_module.addExpensesTitle} >Додайте витрати</Text>
				</View>
				<View>
					<Text style={style_module.addExpensesSubTitle} >Виберіть або створіть хештег для витрат:</Text>
				</View>
				<View style={style_module.hashtags}  >
					<Hashtag text="#dog" additionalStyle={ styles.hashtagActive }>
						<Text style={ style_module.hashtagActiveText }/>
					</Hashtag>
					<Hashtag text="#games" >
						<Text />
					</Hashtag>
					<Hashtag text="#beer" additionalStyle={ styles.hashtagActive }>
						<Text style={ style_module.hashtagActiveText }/>
					</Hashtag>
					<Hashtag text="#dog" additionalStyle={ styles.hashtagActive }>
						<Text style={ style_module.hashtagActiveText }/>
					</Hashtag>
					<Hashtag text="#games" >
						<Text />
					</Hashtag>
					<Hashtag text="#beer" additionalStyle={ styles.hashtagActive }>
						<Text style={ style_module.hashtagActiveText }/>
					</Hashtag>
					<Hashtag text="#dog" additionalStyle={ styles.hashtagActive }>
						<Text style={ style_module.hashtagActiveText }/>
					</Hashtag>
					<Hashtag text="#games" >
						<Text />
					</Hashtag>
					<Hashtag text="#beer" additionalStyle={ styles.hashtagActive }>
						<Text style={ style_module.hashtagActiveText }/>
					</Hashtag>
				</View>
				<View style= { style_module.expenseForm } >
					<Input placeholder="#Hashtag"   />
					<Input placeholder="$Expense"   />
				</View>
				<View style= { styles.navigation } >
					<Button text="Додати витрати"/>
				</View>
			</View>
		);
	}
}
