import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import SelectInput from 'react-native-select-input-ios';

import styles from "../../themes/styles";
import style_module from "./styles";
import Nav from "../../components/nav";
import Loader from "../../components/loader";
import CostRow from "../../components/costRow";
import {connect} from "react-redux";
import {getCategories, getCosts} from "../../actions";

class App extends Component{
	constructor(props) {
		super(props);

		this.state = {
			valueSmall0: 0,
			valueSmall1: 1,
			valueLarge:  2,
			loading: false,
		};
	}
	onSubmitEditingSmall0(value) {
		this.setState({
			valueSmall0: value,
		});
	}

	getPickerOptions() {
		return [
			{ value: 0, label: 'По днях'      },
			{ value: 1, label: 'По місяцях'     },
			{ value: 2, label: 'По роках' }
		];
	}

	componentWillMount() {
		this.setState({loading:true})
		this.props.getCategories().finally(()=> {
			this.props.getCosts().finally(() => {
				this.setState({loading: false})
			});
		});
	}

	renderCosts() {
		return this.props.costs.costs.allDates.slice(0, 10).map((data) => {
			let title = this.props.costs.costs.byDates[data].title;
			let cost = this.props.costs.costs.byDates[data].value;
			let type = false;
			if(this.props.costs.costs.byDates[data].type == 'small'){
				type = true;
				title = this.props.categories.categories.byIds[ this.props.costs.costs.byIds[this.props.costs.costs.byDates[data].id].category].title
			}else{
				let currDateString = new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear() ;
				let prevDateString = (new Date().getDate()-1)+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear() ;
				if(title == currDateString){
					title = 'Сьогодні';
				}else if(title == prevDateString){
					title = 'Вчора';
				}
				cost = this.props.costs.costs.byDatesTitle[this.props.costs.costs.byDates[data].title].price
			}


			return (
				<CostRow key={`cost-${data}`} text={title} costs={[cost,' ',this.props.auth.currency]} smallRow={type}></CostRow>
			)
		});
	}

	render() {
		let state = this.state;

		return (
			<View style = { [styles.container] }>
				<ScrollView style= { [styles.content] } >
					<View style={[style_module.containerBackground, style_module.selectTitleWrapper]}>
						<Text  style={style_module.selectTitleContent}>Фільтрувати</Text>
					</View>
					<View style={[style_module.containerBackground, style_module.selectWrapper]}>
						<SelectInput
							value={state.valueSmall0}
							options={this.getPickerOptions()}
							onCancelEditing={() => console.log('onCancel')}
							onSubmitEditing={this.onSubmitEditingSmall0.bind(this)}
							color={'red'}
							style={[style_module.selectInput, style_module.selectInputSmall]}
						/>
						<Icon name='chevron-down' size={25} color="#3c3c3c"></Icon>
					</View>

					{/*<View style= { [styles.content, style_module.containerBackground] } >*/}

						{/*<Text style={ [styles.bigTitle, style_module.bigTitle] }> Квітень, 1 </Text>*/}
						{/*<View*/}
							{/*style={{*/}
								{/*borderBottomColor: '#abe5e1',*/}
								{/*borderBottomWidth: 1,*/}
								{/*marginTop: 25,*/}
								{/*marginBottom: 25,*/}
								{/*marginLeft: 45,*/}
								{/*marginRight: 45,*/}
							{/*}}*/}
						{/*/>*/}

					{/*</View>*/}
					<View style = { style_module.costs_wrapper }>
						{this.state.loading ? <Loader/> : this.renderCosts()}
					</View>
				</ScrollView>
				<Nav active = {'chart'}/>
			</View>
		);
	}
}

export default connect(({costs, categories, auth})=>{ return {costs, categories, auth}}, { getCosts, getCategories })(App);