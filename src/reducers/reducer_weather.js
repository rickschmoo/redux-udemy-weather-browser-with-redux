import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	// console.log('Action received by WeatherReducer: ', action);


	switch (action.type) {

		case FETCH_WEATHER:
			
			// don't use push - as messes with state directly
			// return state.concat([action.payload.data]);
			// alt
			return [action.payload.data, ...state ];

	}

	return state;
}