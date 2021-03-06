import React from "react"

// person component is used for all kind of person elements that can be used on a page

function Person(props) {
  return (
    <a className="person" href={props.link} target="_blank" rel="noopener noreferrer">
        <h3 className="contactName">{props.name}</h3>
        {props.showImage === true &&
          <img className="contactImage" alt="contact" src={props.imageUrl}></img>
        }
    </a>
  )
}

export default Person