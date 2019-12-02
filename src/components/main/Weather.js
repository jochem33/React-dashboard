import React, {Component} from "react"

import Cloud from "../sub/Cloud"
import ReadMore from "../sub/ReadMore"

class Weather extends Component {

    constructor() {
        super()
        this.state = {
            forecast: "Loading..."
        }

        this.url = "https://data.buienradar.nl/2.0/feed/json"

    }

    fetchWeatherData() {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                console.log(data.forecast.fivedayforecast)
                this.setState({
                    forecast: data.forecast.fivedayforecast
                })
        })
    }


    componentDidMount() {
        this.fetchWeatherData()
    }

    
    render() {
        let weatherInfo;
        if(this.state.forecast === "Loading...") {
            weatherInfo = this.state.forecast;
        } else {
            weatherInfo = this.state.forecast.map((daydata) => {
                return(
                    <Cloud date={daydata.day} icon={daydata.iconurl} temp={daydata.maxtemperature + "°"}/>
                )
            })

            // weatherInfo = this.state.forecast[0].maxtemperature
        }

        return (
          <div className="dashboardComponent gridItemWeather">
                <h1>Weather</h1>
                <div className="weatherContainer">
                    {weatherInfo}
                </div>
                {/* <Cloud date="" icon="" temp=""/> */}
                <ReadMore linkUrl="https://www.buienradar.nl/" linkText="Weather by Buienradar"/>
          </div>
      )
    }
}

export default Weather


