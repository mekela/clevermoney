import firebase from "../config/firebase";
import {categoriesTypes} from '../reducers/types';

export const getCategories = () => (dispatch) => {

	const curUser = firebase.auth().currentUser;
	var recentPostsRef = firebase.database().ref(`users/${curUser.uid}/categories`);
	return recentPostsRef.once('value').then(snapshot => {
		const categories = [];

		snapshot.forEach(item => {
			categories.push({
				id: item.key,
				...item.val()
			});
		});

		dispatch({type: categoriesTypes.listReceive, payload: categories.sort()});
	}).finally(()=>{

	})

};

//export const removeCategory = id => dispatch =>
	//dispatch({type: categoriesTypes.itemRemove, payload: id});

export const removeCategory = (id) => (dispatch) => {
	const { currentUser } = firebase.auth();
	return	firebase.database().ref(`/users/${currentUser.uid}/categories/${id}`)
			.remove()
			.then(() => {
				dispatch({ type: categoriesTypes.itemRemove, payload: id });
			}).finally(()=>{

		});

};

// export const addCategory = category => dispatch =>
// 	dispatch({type: categoriesTypes.itemAdd, payload: category});

// const _addCategory = (category) => ({
// 	type: categoriesTypes.itemAdd,
// 	category
// });
// export const addCategory = (categoryData = {title: ''}) => {
// 	return (dispatch) => {
// 		const category = { title: categoryData.title };
// 		const curUser = firebase.auth().currentUser;
// 		return firebase.database().ref(`users/${curUser.uid}/categories`).push(category).then(ref => {
// 			dispatch(_addCategory({id: ref.key, ...category}));
// 		});
// 	};
// };

export const addCategory = ({ title }) => (dispatch) => {
	const { currentUser } = firebase.auth();
	return	firebase.database().ref(`/users/${currentUser.uid}/categories`)
			.push({ title })
			.then((snapshot) => {
				dispatch({ type: categoriesTypes.itemAdd, payload: {key: snapshot.key, title} });
			})
			.catch(() => {
				console.log('Category creation failed');
			});
};

export const makeActive = id => dispatch => {
	return new Promise((resolve, reject) => {
		dispatch({type: categoriesTypes.makeActive, payload: id});
		resolve(true);
	});
}
