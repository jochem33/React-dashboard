import React, {Component} from "react"

import Person from "../sub/Person"

class Favorites extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemFavorites">
                <h1>Favorites</h1>
                <Person />
          </div>
      )
    }
}

export default Favorites