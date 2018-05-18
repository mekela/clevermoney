import { cafesTypes } from './types';

const NormalizeCafeList = (state, cafes) => {
	const normalizedReviews = {
		byIds: {},
		allIds: [],
	}
	const normalizeCafes = {
		byIds: cafes.reduce((prev, current) => {
			prev[current.id] = current;
			if(current.reviews) {
				current.reviews.forEach(review => {
					normalizedReviews.byIds[review.id] = review;
					normalizedReviews.allIds.push(review.id)
				})
			}
			current.reviews = current.reviews
				?current.reviews.map(review => review.id)
				:[];

			prev[current.id] = current;
			return prev;
		},{}),
		allIds: cafes.map(current => current.id)
	};
	normalizedReviews.allIds =
		Object.keys(normalizedReviews.byIds)

	console.log(normalizeCafes, normalizedReviews);

	return {
		...state,
		cafes: normalizeCafes,
		reviews: normalizedReviews,
		loading: false,
	};
}

const INITIAL_STATE = {
	cafes: {
		ByIds: {},
		AllIds: []
	},
	reviews:{
		ByIds: {},
		AllIds: []
	},
	list: [],
	current: {},
	loading: false
}

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case cafesTypes.loaderStart:
			return { ...state, loading: true};
		case cafesTypes.loaderEnd:
			return { ...state, loading: false};
		case cafesTypes.listReceive:
			//return { ...state, list: action.payload, loading: false };
			return NormalizeCafeList(state, action.payload);
		case cafesTypes.itemReceive:
			return { ...state, current: action.payload };
		default:
			return state;
	}
}