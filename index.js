import React from 'react';
import {AppRegistry} from 'react-native';
import { createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
//import App from './src/scenes/welcomeScene';
import './src/test';
import Router from './src/Router';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App = () =>
	<Provider store={store}>
		<Router/>
	</Provider>;


AppRegistry.registerComponent('App2', () => App);