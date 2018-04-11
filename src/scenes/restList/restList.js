import { View, Text, FlatList, ActivityIndicator, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';

import styles from "../../themes/styles";
import Header from "../../components/header";
import Nav from "../../components/nav";
import {Actions} from "react-native-router-flux";

export default class FetchExample extends React.Component {

	constructor(props){
		super(props);
		this.state ={ isLoading: true}
	}

	componentDidMount(){
		return fetch('http://coffee-points.dev2.devloop.pro/api/cafes')
			.then((response) => response.json())
			.then((responseJson) => {

				this.setState({
					isLoading: false,
					dataSource: responseJson,
				}, function(){

				});

			})
			.catch((error) =>{
				console.error(error);
			});
	}



	render(){

		if(this.state.isLoading){
			return(
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			)
		}

		return(
			<View style={{flex: 1, paddingTop:20}}>
				<FlatList
					data={this.state.dataSource}
					renderItem={({item}) => <Text>{item.name}, {item.rating}</Text>}
					keyExtractor={(item, index) => index} 
				/>
			</View>
		);
	}
}
