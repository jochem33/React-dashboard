import React from "react"

function Cloud(props) {    
    let day
    // get only the date form the datetime element provided by buienradar
    day = props.date.split("-")[2].substring(0, 2) + "/" + props.date.split("-")[1]

    return (
        <div className="cloudComponent">
            <p className="weatherDate">{day}</p>
            <img className="weatherImage" alt="buienradaricon" src={props.icon}></img>
            <p className="weatherTemp">{props.temp}</p>
        </div>
    )
}

export default Cloud