import React, {Component} from "react"

import Time from "./SubTime"

class Clock extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div>
                <p>Clock</p>
                <Time />
          </div>
      )
    }
}

export default Clock