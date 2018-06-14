import {Actions} from 'react-native-router-flux';
import firebase from "../config/firebase";
import Toaster from '../../src/components/toaster'

export const signIn = ({email, password}) => (dispatch) => {

	if (email == "") {
		return Promise.reject('enter email')
	}
	if (password == "") {
		return Promise.reject('enter password')
	}
	console.log(email, password);
	return firebase.auth()
		.signInWithEmailAndPassword(email, password).then(() => {
			const curUser = firebase.auth().currentUser;
			const ref = firebase.database().ref(`users/${curUser.uid}`);

			return ref.once('value').then(function (snapshot) {
				dispatch({type: 'auth_user_receive', payload: snapshot.val()});
			});

		});
};

export const signOut = () => (dispatch) => {

	return firebase.auth()
		.signOut().then(() => {
			dispatch({type: 'auth_user_out'});
			Actions.loginScene();
			console.log('logout');
		});
};


export const signUp = ({name, email, password})  => (dispatch) => {

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
							email,
							currency: 'UAH',
							budget: 8000,
						});

					firebase.database().ref(`/users/${curUser.uid}/categories`).push({ title:'Авто' });
					firebase.database().ref(`/users/${curUser.uid}/categories`).push({ title:'Розваги' });
					firebase.database().ref(`/users/${curUser.uid}/categories`).push({ title:'Сім\'я' });
				});
		}).catch(error => {
			return Promise.reject(error);
		})
};

reauthenticate = (currentPassword) => {
	var user = firebase.auth().currentUser;
	var cred = firebase.auth.EmailAuthProvider.credential(
		user.email, currentPassword);
	return user.reauthenticateWithCredential(cred).then(function() {
		//console.log('reauthenticated');
	}).catch(function(error) {
		Toaster.showMessage(error.message);
	});;
}

export const changePassword = (currentPassword, newPassword) =>  dispatch => {
	if (currentPassword == "") {
		return Promise.reject('enter current Password')
	}
	if (newPassword == "") {
		return Promise.reject('enter new Password')
	}

	return reauthenticate(currentPassword).then(() => {
		var user = firebase.auth().currentUser;
		user.updatePassword(newPassword).then(() => {
			alert("Password updated!");
		}).catch((error) => {
			Toaster.showMessage(error.message);
		});
	}).catch((error) => {  });
};

export const checkAuth = () => {

	return firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			return Promise.resolve('true');;
		} else {
			return Promise.reject('false');
		}
	});
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

export const updateUserBudget = (user, budget) => (dispatch) => {

	if (!budget) {
		return Promise.reject('enter the budget')
	}

	const curUser = firebase.auth().currentUser;
	const ref = firebase.database().ref(`users/${curUser.uid}`);
	ref.set({
		...user, budget
	});
	ref.on('value', function (snapshot) {
		dispatch({type: 'auth_user_receive', payload: snapshot.val()});
		Toaster.showMessage("Бюджет успішно оновлено");
		Actions.profileScene();
	});
}

export const updateUserSetting = (user, setting, value, message = '') => (dispatch) => {

	if (!value) {
		return Promise.reject('enter the value')
	}

	const curUser = firebase.auth().currentUser;
	const ref = firebase.database().ref(`users/${curUser.uid}`);
	ref.set({
		...user, [setting]: value
	});
	ref.on('value', function (snapshot) {
		dispatch({type: 'auth_user_receive', payload: snapshot.val()});
		Actions.profileScene();
		if(message!='') Toaster.showMessage(message);
	});
}
export const updateUserDetailNotifications = ({notification}) => (dispatch) => {
	// console.log(currency);
	const curUser = firebase.auth().currentUser;
	const ref = firebase.database().ref(`users/${curUser.uid}/details`);
	ref.set({
		notification,
	});
	ref.on('value', function (snapshot) {
		dispatch({type: 'auth_user_receive', payload: snapshot.val()});
	});
}