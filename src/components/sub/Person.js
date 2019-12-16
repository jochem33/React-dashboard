import React, {Component} from "react"

class Person extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div className="person">
              <h3 className="contactName">{this.props.name}</h3>
              <img className="contactImage" alt="contactimage" src={this.props.imageUrl}></img>
          </div>
      )
    }
}

export default Person