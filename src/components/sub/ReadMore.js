import React from "react"

// component used for linking external sites

function ReadMore(props) {
    let customText
    // if there's a custom link text, use that. Else use "Read more.."
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