import React, {Component} from "react"

import Cloud from "../sub/Cloud"
import ReadMore from "../sub/ReadMore"

class Weather extends Component {

    constructor() {
        super()
        this.state = {
            forecast: false
        }

        this.url = "https://data.buienradar.nl/2.0/feed/json"

    }

    fetchWeatherData() {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    forecast: data.forecast.fivedayforecast
                })
        })
    }


    componentDidMount() {
        this.fetchWeatherData()
    }

    
    render() {
        let weatherInfo
        if(this.state.forecast === false) {
            weatherInfo = <p>Loading...<br/></p>
        } else {
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


