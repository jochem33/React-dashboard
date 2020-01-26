import React, {Component} from "react"

import Clock from "../sub/Clock"
import SubTime from "../sub/SubTime"


class Time extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemTime">
                <h1>Time</h1>
                <Clock width="100"/>
                <SubTime />
          </div>
      )
    }
}

export default Time