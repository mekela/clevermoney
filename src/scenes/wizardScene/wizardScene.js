import React, {Component} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Actions } from 'react-native-router-flux';
import module_style from "../../scenes/wizardScene/styles";
import {Text, View} from "react-native";
import {signIn, changeAuthData, signOut} from "../../actions"
import {connect} from 'react-redux';
//import Button from "../../components/button";

const slides = [
	{
		key: 'somethun',
		title: 'Title 1',
		text: 'Description.\nSay something cool',
		image: require('../../../assets/1.jpg'),
		imageStyle: module_style.image,
		backgroundColor: '#59b2ab',
	},
	{
		key: 'somethun-dos',
		title: 'Title 2',
		text: 'Other cool stuff',
		image: require('../../../assets/2.jpg'),
		imageStyle: module_style.image,
		backgroundColor: '#febe29',
	},
	{
		key: 'somethun1',
		title: 'Rocket guy',
		text: 'I\'m already out of descriptions\nLorem ipsum bla bla bla111',
		image: require('../../../assets/3.jpg'),
		imageStyle: module_style.image,
		backgroundColor: '#22bcb5',
	}
];

class App extends Component{
	_onDone = () => {
		// User finished the introduction. Show "real" app
	}
	_renderNextButton = () => {
		return (
			<View>
				<Text>Далі</Text>
			</View>
		);
	}
	_renderDoneButton = () => {
		return (
			<View>
				<Text onPress={this.finishSlide.bind(this)} >Закінчити</Text>
			</View>
		);
	}
	finishSlide(){
		this.props.signIn(this.props.authParams)
			.then(Actions.homepageScene)
			.catch(error=>{alert(error)})
			.finally(() => {
				this.setState({loading: false})
			});
	}
	componentWillMount(){

	}
	render() {
		return (
			<AppIntroSlider
				slides={slides}
				onDone={this._onDone}
				renderDoneButton={this._renderDoneButton}
				renderNextButton={this._renderNextButton}
			/>
		);
	}

	// export const checkAuth = () =>{
	//
	// }
}

export default connect(({auth})=>{ return {auth}}, { signIn, changeAuthData, signOut })(App);