import axios from 'axios';

// Open Weather Map API references
// See https://www.openweathermap.org/api
//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
	// http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22
const OPENWEATHERMAP_API_KEY = '8a8c566248b115fc1304b309ea81a1db';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API_KEY}`;

// ACTIONS
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {

	// build URL
	const url=`${ROOT_URL}&q=${city},uk`;

	// make query => returns promise
	const request = axios.get(url);

	console.log('Request: ', request);
	
	return ({
		type: FETCH_WEATHER,
		payload: request
	});
}