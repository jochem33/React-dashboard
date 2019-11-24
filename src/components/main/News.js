import React, {Component} from "react"

import ReadMore from "../sub/ReadMore"


class News extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemNews">
                <h1>News</h1>
                <ReadMore />
          </div>
      )
    }
}

export default News