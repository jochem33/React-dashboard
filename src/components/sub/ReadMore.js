import React, {Component} from "react"

class ReadMore extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        let customText;
        if(this.props.linkText) {
            customText = this.props.linkText

        } else {
            customText = "Read more..."

        }
        

        return (
            <div>
                <a className="readmorelink" target="_blank" rel="noopener noreferrer" href={this.props.linkUrl}>{customText}</a>
            </div>
      )
    }
}

export default ReadMore