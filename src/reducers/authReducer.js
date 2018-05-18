const INITIAL_STATE = {
	email:'test@test.ua',
	password:'123123123',
};

export default function reducer(state = INITIAL_STATE, action) {
	console.log(action);

	switch (action.type) {
		case 'auth_change_data':
			return {
				...state,
				[action.payload.field]: action.payload.value
			};
		case 'auth_user_receive':
			return { ...action.payload };
		case 'auth_user_out':
			return INITIAL_STATE;
		default:
			return state;
	}
}