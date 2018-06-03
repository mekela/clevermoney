import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import { createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/router';
import reducers from './src/reducers';
import Toaster, {ToasterView} from './src/components/toaster'
import PushNotification from 'react-native-push-notification'

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

	componentWillMount(){
		PushNotification.configure({

			// (optional) Called when Token is generated (iOS and Android)
			onRegister: function(token) {
				console.log( 'TOKEN:', token );
			},

			// (required) Called when a remote or local notification is opened or received
			onNotification: function(notification) {
				console.log( 'NOTIFICATION:', notification );

				// process the notification

				// required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
				//notification.finish(PushNotificationIOS.FetchResult.NoData);
			},

			// ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
			senderID: "YOUR GCM SENDER ID",

			// IOS ONLY (optional): default: all - Permissions to register.
			permissions: {
				alert: true,
				badge: true,
				sound: true
			},
			popInitialNotification: true,
			requestPermissions: true,
		});

		PushNotification.localNotificationSchedule({
			message: "My Notification Message", // (required)
			date: new Date(Date.now() + (10 * 1000)) // in 60 secs
		});
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