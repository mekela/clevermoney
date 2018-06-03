import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from "../../themes/styles";
import style_module from "./styles";
import Nav from "../../components/nav";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {connect} from 'react-redux';
import Loader from "../../components/loader";
import Button from "../../components/button";
import {changeAuthData, updateUserDetailNotifications} from "../../actions";

class notyficationsScene extends Component{
	constructor(){
		super();
		this.state = {
			loading: false,
			types2: [{label: 'UAH (₴)', value: 'UAH'}, {label: 'USD ($)', value: 'USD'},],
		}

	}

	componentWillMount(){
		this.props.auth.details.currency ? this.props.auth.details.currency : 'UAH';
	}

	changeAuthData(field,value){
		this.props.changeAuthData(field,value);
	}
	updateButtonPress(){
		//console.log(this.props.auth.details)
		this.props.updateUserDetail(this.props.auth.details);
	}
	getInitialState() {
		return {
			value: 0,
		}
	}


	render(){
		return (

		<View style={[styles.container]}>
			<ScrollView style={styles.innerWrapper}>
				{this.state.loading ? <Loader/> : null}
				<View style={style_module.titleWrapper} >
					{/*<Text>Валюта {this.props.auth.details.currency} </Text>*/}
					<Text style={style_module.title} >Активна валюта: {this.props.auth.details.currency}</Text>
				</View>
				<View style={style_module.radioFormWrapper} >
					<RadioForm
						animation={true}
					>
						{this.state.types2.map((obj, i) => {
							console.log(obj);
							var is_selected = obj.value == this.props.auth.details.currency;
							return (
								<View key={i}>
									<RadioButton
										isSelected={is_selected}
										obj={obj}
										index={i}
										buttonColor={'#2196f3'}
										labelColor={'#000'}
										onPress={(value, index) => {
											this.props.auth.details.currency = value;
											this.changeAuthData('currency',value)
										}}
									/>
								</View>
							)
						})}
					</RadioForm>

				</View>
				<View >
					<Button text="Оновити" click={this.updateButtonPress.bind(this)}/>
				</View>

			</ScrollView>
		</View>

	);
	}
}



export default  connect(({auth})=>{ return {auth}}, {changeAuthData, updateUserDetail})(currencyScene);