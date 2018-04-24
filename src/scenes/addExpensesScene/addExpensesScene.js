import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";

import styles from "../../themes/styles";
import Hashtag from "../../components/hashtag";
import Input from "../../components/input";
import Button from "../../components/button";
import style_module from "./styles";
import Nav from "../../components/nav";


export default class App extends React.Component {
	render() {
		return (
			<View style={style_module.addExpensesContainer}>
				<ScrollView >
					<View style= { style_module.expenseForm } >
						<Text style= { style_module.formLabel }>
							Сумма:
						</Text>
						<Input placeholder="0"   />
					</View>
					<View style={style_module.categoryLine}  >
						<Text style= { style_module.formLabel }>
							Категорія:
						</Text>
						<Text style= { style_module.formPlus }>
							<Icon name='plus' size={40} color="#4de1d3"/>
						</Text>
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
						<Text style= { style_module.formLabel }>
							Дата:
						</Text>
						<Input placeholder="" />
					</View>
					<View>
						<Button text="Додати витрати"/>
					</View>
				</ScrollView>
				<Nav/>
			</View>
		);
	}
}
