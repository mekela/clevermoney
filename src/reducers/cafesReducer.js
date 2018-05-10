import { cafesTypes } from './types';

const INITIAL_STATE = {
	list: [],
	current: {},
	loading: false
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case cafesTypes.loaderStart:
			return { ...state, loading: true};
		case cafesTypes.loaderEnd:
			return { ...state, loading: false};
		case cafesTypes.listReceive:
			return { ...state, list: action.payload, loading: false };
		case cafesTypes.itemReceive:
			return { ...state, current: action.payload };
		default:
			return state;
	}
}