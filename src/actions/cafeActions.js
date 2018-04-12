import axios from 'axios';

const apiUrl = 'http://coffee-points.dev2.devloop.pro';

export const getCafes = (params) =>
	axios.get(`${apiUrl}/api/cafes`).then(response =>{
		return response.data;
	});