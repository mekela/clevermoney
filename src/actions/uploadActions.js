import {apiUrl} from "../config/constants"
import firebase from "../config/firebase";
import Platform from "react-native";
import RNFetchBlob from 'react-native-fetch-blob'

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;

export const uploadImage = (data, imageName, mime = 'image/jpg') => {
	if(imageName){
		let uploadBlob = null;
		const imageRef = firebase.storage().ref('users').child(imageName);

		return Blob.build(data.data, {type: `${mime};BASE64`})
			.then((blob) => {
				console.log(data.data);
				uploadBlob = blob;
				// return imageRef.put(blob, {contentType: mime})


				return imageRef.putString(data.data, 'base64').then(function(snapshot) {
					console.log('Uploaded a base64 string!');
				});
			})
			.then(() => {
				uploadBlob.close();
				return imageRef.getDownloadURL()
			})
			.then((url) => {
				// console.log(url);
				// resolve(url);
				return url;
			})
			.catch((error) => {
				alert(JSON.stringify(error));
				console.log(JSON.stringify(error));
				Promise.reject(error);
			});
	}else{
		return Promise.reject();
	}

};