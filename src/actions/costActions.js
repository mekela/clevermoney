import firebase from "../config/firebase";
import {costsTypes} from '../reducers/types';

export const getCosts = () => (dispatch) => {

	const curUser = firebase.auth().currentUser;
	var recentPostsRef = firebase.database().ref(`users/${curUser.uid}/costs`);
	return recentPostsRef.once('value').then(snapshot => {
		const costs = [];

		snapshot.forEach(item => {
			costs.push({
				id: item.key,
				...item.val()
			});
		});

		dispatch({type: costsTypes.listCosts, payload: costs.sort()});
	}).finally(()=>{

	})

};

export const addCost = ({ price, category }) => (dispatch) => {
	if (price == "") {
		return Promise.reject('Please enter the price')
	}
	if (!category) {
		return Promise.reject('Please set the category')
	}
	console.log(price, category);
	const { currentUser } = firebase.auth();
	//var currentTime = new Date().toString();
	return	firebase.database().ref(`/users/${currentUser.uid}/costs`)
		.push({ price, category, date: new Date().toString() })
		.then((snapshot) => {

			dispatch({ type: costsTypes.itemAdd, payload: {key: snapshot.key, price, category} });
		})
		.catch((error) => {
			console.log('Cost creation failed', error);
		});
};


export const removeCost = (id) => (dispatch) => {
	const { currentUser } = firebase.auth();
	return	firebase.database().ref(`/users/${currentUser.uid}/costs/${id}`)
			.remove()
			.then(() => {
				dispatch({ type: costsTypes.itemRemove, payload: id });
			}).finally(()=>{

		});

};
