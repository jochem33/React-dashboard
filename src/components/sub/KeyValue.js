import React from "react"

// this component renders some text and a value connected with the text

function KeyValue(props){
    return (
        <div>
            <p>{props.keytitle}: {props.value}</p>
        </div>
    )
}

export default KeyValue