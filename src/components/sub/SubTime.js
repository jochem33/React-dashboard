import React, {Component} from "react"

class Time extends Component {
    constructor() {
        super()
        this.state = {
            digitalTime: new Date()
        }
    }

    
    render() {
        setInterval(() => this.setState({digitalTime: new Date()}), 1000 )

        return (
          <div>
                <p>{String(this.state.digitalTime).split("GMT")[0]}</p>
          </div>
      )
    }
}

export default Time