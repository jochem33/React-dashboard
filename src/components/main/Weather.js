import React, {Component} from "react"

import Cloud from "../sub/Cloud"
import ReadMore from "../sub/ReadMore"

class Weather extends Component {

    constructor() {
        super()        
        // setting up state
        // false is the default for things that shouldn't display when they are not yet loaded
        this.state = {
            forecast: false
        }

        this.url = "https://data.buienradar.nl/2.0/feed/json"

    }


    // fetch weather data
    fetchWeatherData() {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                // put the fivedayforecast object in state
                this.setState({
                    forecast: data.forecast.fivedayforecast
                })
        })
    }


    // call fetchweatherdata when the page loads
    componentDidMount() {
        this.fetchWeatherData()
    }

    
    render() {
        let weatherInfo
        // if the data isnt loaded yet
        if(this.state.forecast === false) {
            weatherInfo = <p>Loading...<br/></p>
        } else { // if the data is loaded
            // create a jsx element for each day of the forecast
            weatherInfo = this.state.forecast.map((daydata, index) => {
                return(
                    <Cloud date={daydata.day} icon={daydata.iconurl} key={index} temp={daydata.maxtemperature + "°"}/>
                )
            })
        }

        return (
          <div className="dashboardComponent gridItemWeather">
                <h1>Weather</h1>
                <div className="weatherContainer">
                    {weatherInfo}
                </div>
                <ReadMore linkUrl="https://www.buienradar.nl/" linkText="Weather by Buienradar"/>
          </div>
      )
    }
}

export default Weather


