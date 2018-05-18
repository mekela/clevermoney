import axios from 'axios';
const apiUrl = 'http://coffee-points.dev2.devloop.pro';
import {Actions} from 'react-native-router-flux';
import firebase from "../config/firebase";
import {cafesTypes} from '../reducers/types'

export const getCafes = (params) => (dispatch) => {

	dispatch({type: cafesTypes.loaderStart});

	// var recentPostsRef = firebase.database().ref('/categories');
	// recentPostsRef.once('value').then(snapshot => {
	// 	// snapshot.val() is the dictionary with all your keys/values from the '/store' path
	// 	//this.setState({ stores: snapshot.val() })
	// 	let val = snapshot.val();
	// 	console.log(val);
	//
	// 	// val.forEach(function(item, i, arr) {
	// 	// 	console.log( i + ": " + item + " (массив:" + arr + ")" );
	// 	// });
	// 	dispatch({type: cafesTypes.listReceive, val})
	// })

	// recentPostsRef.on('value', (snap) => {
	// 	var items = [];
	// 	snap.forEach((child) => {
	// 		items.push({
	// 			name: child.val().name,
	// 			id: child.key
	// 		});
	// 	});
	// 	dispatch({type: cafesTypes.listReceive, items});
	//
	// });

	axios.get(`${apiUrl}/api/cafes`).then(response => {
		const payload = response.data.map(cafe => {
			cafe.image = cafe.pictures[0] != undefined
				? {url: `${apiUrl}/${cafe.pictures[0].url.replace('.jpg', '-100x100.jpg')}`}
				: require('../themes/logo.png')
			return cafe;
		});
		dispatch({type: cafesTypes.listReceive, payload})

	}).finally(() => {
		dispatch({type: cafesTypes.loaderEnd});
	});
};

export const setCafe = cafe => dispatch =>
	dispatch({type: cafesTypes.itemReceive, payload: cafe});


export const getCafe = (params) => {
	const {id} = params;

	return axios.get(`${apiUrl}/api/cafes/${id}`)
		.then(response => {
			const cafe = response.data;

			cafe.image = cafe.pictures[0] != undefined
				? {url: `${apiUrl}/${cafe.pictures[0].url}`}
				: require('../themes/logo.png')

			cafe.images = cafe.pictures.map(picture => {
				return {url: `${apiUrl}/${picture.url}`, id: picture.id}
			})
			return cafe;
		})
		.catch(error => {
			console.log(error);
		});
}