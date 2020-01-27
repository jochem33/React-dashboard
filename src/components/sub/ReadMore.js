import React from "react"

function ReadMore(props) {
    let customText
    if(props.linkText) {
        customText = props.linkText

    } else {
        customText = "Read more..."

    }
    

    return (
        <div>
            <a className="readmorelink" target="_blank" rel="noopener noreferrer" href={props.linkUrl}>{customText}</a>
        </div>
    )
}

export default ReadMore