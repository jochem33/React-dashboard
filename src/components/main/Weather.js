import React, {Component} from "react"

import Cloud from "../sub/Cloud"
import ReadMore from "../sub/ReadMore"

class Weather extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemWeather">
                <h1>Weather</h1>
                <Cloud />
                <ReadMore />
          </div>
      )
    }
}

export default Weather