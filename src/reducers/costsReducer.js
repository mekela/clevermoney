import {costsTypes} from '../reducers/types';
const INITIAL_STATE = {};

const NormalizeCostsList = (state, costs) => {
	const NormalizeCosts = {
		byIds: costs.reduce((prev, current) => {
			prev[current.id] = current;
			return prev;
		}, {}),
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