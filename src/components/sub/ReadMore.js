import React, {Component} from "react"

class ReadMore extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div>
                <a className="readmorelink" href={this.props.linkUrl}>Read more...</a>
          </div>
      )
    }
}

export default ReadMore