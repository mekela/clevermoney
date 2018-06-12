import React from 'react';
import {View, Text} from "react-native";


class Toaster{
	constructor(){
		this.message = '';
		this.showListener = null;
		this.hideListener = null;
		this.messages = [];
	}
	registerShowListener(listener){
		this.showListener = listener;
	}
	registerHideListener(listener){
		this.hideListener = listener;
	}
	showMessage(message){
		this.messages.unshift(message);
		this.showListener(this.messages);
		setTimeout(()=>{
			this.messages.pop();
			if(this.messages.length == 0){
				this.hideListener();
			}else{
				this.showListener(this.messages);
			}
		}, 5000);
		// this.message = message;
		// if(this.showListener && this.hideListener){
		// 	this.showListener(message);
		// 	setTimeout(()=>{
		// 		this.hideListener();
		// 	}, 5000);
		// 	console.log('Message', message);
		// }

	}
}

export const ToasterView = (props) =>{
	console.log(props.message);
	return <View style={{position:'absolute', width: '100%',paddingTop:20}}>

			{props.message.map(message => <View key={`toaster-${message}`} style={{backgroundColor:'rgba(77,225,211,0.8)',marginTop:2, paddingVertical: 10, width: '100%', paddingHorizontal: 5}}><Text>{message}</Text></View>)}
			{/*<Text>{props.messages}</Text>*/}

	</View>
}


export default new Toaster();