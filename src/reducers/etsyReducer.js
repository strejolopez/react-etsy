const initialState = {
	items: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'GET_DATA':
			return {items: [...state.items, ...action.items]}
		default:
			return state
	}
}