import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMapOriginal from '../components/googel_map'


class WeatherList extends Component{
  static get propTypes() {
    return {
      weather: PropTypes.array
    }
  }
  renderWeather(cityData){
    const city_id = cityData.city.id
    const temps = cityData.list.map( weather=>weather.main.temp )
    const pressures = cityData.list.map( weather=>weather.main.pressure )
    const humiditys = cityData.list.map( weather=>weather.main.humidity )

    const {lon, lat} = cityData.city.coord

    return(
      <tr key={city_id}>
        <td>
          <GoogleMapOriginal lat={lat} lng={lon} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humiditys} color="black" units="%" />
        </td>
      </tr>
    )
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  // {weather} === {weather: weather}
  return {weather}
}

export default connect(mapStateToProps, null)(WeatherList)
