import React, {Component} from "react"

class Cloud extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        let day
        // console.log(this.props.date.split("-"))
        day = this.props.date.split("-")[2].substring(0, 2) + "/" + this.props.date.split("-")[1]

        return (
          <div className="cloudComponent">
                {/* <p>Cloud</p> */}
                <p className="weatherDate">{day}</p>
                <img className="weatherImage" alt="buienradaricon" src={this.props.icon}></img>
                <p className="weatherTemp">{this.props.temp}</p>
          </div>
      )
    }
}

export default Cloud