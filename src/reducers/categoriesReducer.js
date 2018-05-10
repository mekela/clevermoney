const INITIAL_STATE = {
	list: [],
	current: {},
	loading: false
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ListLoadingStart':
			return {...state, loading: true};
		case 'ListGet':
			return {...state, list: action.payload, loading: false};
		case 'ListLoadingEnd':
			return {...state, loading: false};
		default:
			return state;
	}
}