import React from "react"

function Person(props) {
  return (
    <a className="person" href={props.link}>
        <h3 className="contactName">{props.name}</h3>
        {props.showImage === true &&
          <img className="contactImage" alt="contact" src={props.imageUrl}></img>
        }
    </a>
  )
}

export default Person