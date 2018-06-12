import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from "../../themes/styles";
import style_module from "./styles";
import Nav from "../../components/nav";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {connect} from 'react-redux';
import Loader from "../../components/loader";
import Button from "../../components/button";
import {changeAuthData, updateUserDetail} from "../../actions";

class currencyScene extends Component{
	constructor(props){
		super(props);
		this.state = {
			currency: props.auth.currency,
			loading: false,
			types2: [{label: 'UAH (₴)', value: 'UAH'}, {label: 'USD ($)', value: 'USD'},],
		}

	}

	componentWillMount(){

	}

	changeAuthData(field,value){
		this.props.changeAuthData(field,value);
	}
	updateButtonPress(){
		this.props.updateUserDetail(this.props.auth, this.state.currency);
	}

	render(){
		return (

		<View style={[styles.container]}>
			<ScrollView style={styles.innerWrapper}>
				{this.state.loading ? <Loader/> : null}
				<View style={style_module.titleWrapper} >
					<Text>Валюта {this.props.auth.currency} </Text>
					<Text style={style_module.title} >Активна валюта: </Text>
				</View>
				<View style={style_module.radioFormWrapper} >
					<RadioForm
						animation={true}
					>
						{this.state.types2.map((obj, i) => {

							var is_selected = obj.value == this.state.currency;
							return (
								<View key={i}>
									<RadioButton
										isSelected={is_selected}
										obj={obj}
										index={i}
										buttonColor={'#2196f3'}
										labelColor={'#000'}
										onPress={(value, index) => {
											this.setState({ currency: value });
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
			<Nav active = {'user'}/>
		</View>

	);
	}
}



export default  connect(({auth})=>{ return {auth}}, {changeAuthData, updateUserDetail})(currencyScene);