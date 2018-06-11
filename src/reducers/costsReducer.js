import {costsTypes} from '../reducers/types';
const INITIAL_STATE = {};

const NormalizeCostsList = (state, costs) => {
	let titleArray = {};
	let dataArray = [];
	let allDates = [];
	let finishDates = {};
	let finishAllhDates = [];
	let price = 0;
	let i = 0;
	costs.map((data) => {
		let myDate = new Date(data.timestamp);
		let myDateString = myDate.getDate()+'/'+(myDate.getMonth()+1)+'/'+myDate.getFullYear() ;
		let key = myDateString;
		let value = data.price;

		if(key in titleArray){
			price = price + parseInt(value);
		}else{
			price = parseInt(value);
			dataArray = [];
			allDates.push(key);

			finishDates[i] = {
				title: key,
				value,
				type: 'big'
			};
			finishAllhDates.push(i);
			i++;
		}
		dataArray.push(data);
		finishDates[i] = {
			title: key,
			value,
			type: 'small',
			id: data.id
		};
		finishAllhDates.push(i);
		i++;
		titleArray[key] = {price, date: dataArray}
	});

	console.log(finishDates);


	const NormalizeCosts = {
		byIds: costs.reduce((prev, current) => {
			prev[current.id] = current;
			return prev;
		}, {}),
		byDates: finishDates,
		byDatesTitle: titleArray,
		allDates: finishAllhDates,
		allIds: costs.map(current => current.id)
	};


	return {
		...state,
		costs: NormalizeCosts,
	};

};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case costsTypes.listCosts:
			return NormalizeCostsList(state, action.payload);
		case costsTypes.removeCost:
			let index = state.costs.allIds.indexOf(action.payload);
			if (index > -1) {
				state.costs.allIds.splice(index, 1);
			}
			delete state.costs.byIds[action.payload];
			return {...state};
		case costsTypes.addCost:
			state.costs.allIds.push(action.payload.key);
			state.costs.byIds[action.payload.key] = {
				id: action.payload.key,
				price: action.payload.price,
				category: action.payload.category
			};
			return {...state};

		default:
			return state;
	}
}