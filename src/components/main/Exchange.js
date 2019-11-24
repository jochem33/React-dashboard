import React, {Component} from "react"

import KeyValue from "../sub/KeyValue"
import Search from "../sub/Search"


class Exchange extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemExchange">
                <h1>Exchange</h1>
                <KeyValue />
                <Search />
          </div>
      )
    }
}

export default Exchange