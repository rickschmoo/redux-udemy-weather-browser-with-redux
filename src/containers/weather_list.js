import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
// import { bindActionCreators } from 'redux';
// import { fetchWeather } from '../actions/index';

class WeatherList extends Component {

	renderWeather(cityData) {
		
		const name = cityData.city.name;

		const temps = _.map(cityData.list.map(
							weather => weather.main.temp),
							(temp) => temp - 273);

		const pressures = cityData.list.map(
							weather => weather.main.pressure);

		const humidities = cityData.list.map(
							weather => weather.main.humidity);

		const { lon, lat } = cityData.city.coord;
		// equiv to:
		//const lon = cityData.city.coord.lon;
		//const lat = cityData.city.coord.lat;

		// console.log(temps);

		return (
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat}/> 
				</td>

				<td>
					<Chart data={temps} color='orange' units="C"/>
				</td>

				<td>
					<Chart data={pressures} color='blue' units="HPa"/>
				</td>

				<td>
					<Chart data={humidities} color='green' units="%"/>
				</td>				
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps( state ) {
 	return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
