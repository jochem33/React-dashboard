import React, {Component} from "react"

class KeyValue extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div>
                <p>{this.props.keytitle}: {this.props.value}</p>
          </div>
      )
    }
}

export default KeyValue