import {AsyncStorage} from 'react-native'
import {apiUrl} from "../config/constants"
import {Actions} from 'react-native-router-flux';
import firebase from "../config/firebase";

export const signIn = ({email, password}) => (dispatch) => {

	if (email == "") {
		return Promise.reject('enter email')
	}
	if (password == "") {
		return Promise.reject('enter password')
	}

	return firebase.auth()
		.signInWithEmailAndPassword(email, password).then(() => {
			const curUser = firebase.auth().currentUser;
			const ref = firebase.database().ref(`users/${curUser.uid}`);

			return ref.once('value').then(function (snapshot) {
				dispatch({type: 'auth_user_receive', payload: snapshot.val()});
			});

		});
};


export const signUp = ({name, email, password}) => {

	if (email == "") {
		return Promise.reject('enter email')
	}
	if (name == "") {
		return Promise.reject('enter name')
	}
	if (password == "") {
		return Promise.reject('enter password')
	}

	return firebase.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			const curUser = firebase.auth().currentUser;
			return curUser
				.sendEmailVerification({})
				.then(() => {
					firebase.database().ref(`users/${curUser.uid}`)
						.set({
							name,
							email
						});
				});
		}).catch(error => {
			return Promise.reject(error);
		})
};

export const checkAuth = () => {
	AsyncStorage.clear();
	Actions.signIn();
	// AsyncStorage.getItem('apiToken', (err, apiToken) => {
	//   if(apiToken){
	//     return Actions.list();
	//   }
	//   Actions.signIn();
	// })
}


export const changeAuthData = (field, value) => (dispatch) => {
	dispatch({
		type: 'auth_change_data',
		payload: {field, value}
	})
};
export const updateUser = ({name, email, phone}) => (dispatch) => {

	const curUser = firebase.auth().currentUser;
	const ref = firebase.database().ref(`users/${curUser.uid}`);
	ref.set({
		name,
		email,
		phone
	});
	ref.on('value', function (snapshot) {
		dispatch({type: 'auth_user_receive', payload: snapshot.val()});
	});

}