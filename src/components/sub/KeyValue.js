import React from "react"

function KeyValue(props){
    return (
        <div>
            <p>{props.keytitle}: {props.value}</p>
        </div>
    )
}

export default KeyValue