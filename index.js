import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import { createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/router';
import reducers from './src/reducers';
import Toaster, {ToasterView} from './src/components/toaster'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component{
	constructor(){
		super();
		this.state = {
			showToaster: false,
			message: ''
		}
	}

	componentDidMount() {
		Toaster.registerShowListener(this.handleShowToaster.bind(this));
		Toaster.registerHideListener(this.handleHideToaster.bind(this));
	}


	handleShowToaster(message){
		this.setState({message, showToaster : true});
	}
	handleHideToaster(){
		this.setState({showToaster : false});
	}

	render(){
		return <Provider store={store}>
			<View style={{flex:1}}>
				<Router/>
				{this.state.showToaster?<ToasterView message={this.state.message} />:null}
			</View>
		</Provider>
	}
}

AppRegistry.registerComponent('clevermoney', () => App);