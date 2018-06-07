import {categoriesTypes} from '../reducers/types';
const INITIAL_STATE = {};

const NormalizeCategoriesList = (state, categories) => {
	const NormalizeCategories = {
		byIds: categories.reduce((prev, current) => {
			prev[current.id] = current;
			return prev;
		}, {}),
		allIds: categories.map(current => current.id)
	};

	return {
		...state,
		categories: NormalizeCategories,
	};

};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case categoriesTypes.loaderStart:
			return {...state, loading: true};
		case categoriesTypes.loaderEnd:
			return {...state, loading: false};
		case categoriesTypes.listReceive:
			return NormalizeCategoriesList(state, action.payload);
		case categoriesTypes.itemRemove:
			let index = state.categories.allIds.indexOf(action.payload);

			if (index > -1) {
				state.categories.allIds.splice(index, 1);
			}

			delete state.categories.byIds[action.payload];
			return {...state};
		case categoriesTypes.itemAdd:
			state.categories.allIds.push(action.payload.key);
			state.categories.byIds[action.payload.key] = {
				id: action.payload.key,
				title: action.payload.title
			};
			return {...state};
		default:
			return state;
	}
}