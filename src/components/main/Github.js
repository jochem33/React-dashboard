import React, {Component} from "react"

import Person from "../sub/Person"

class Github extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemGithub">
                <h1>Github</h1>
                <Person />
          </div>
      )
    }
}

export default Github