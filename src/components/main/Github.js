import React, {Component} from "react"

import Person from "../sub/Person"

// get the api key for github from external file
import apikey from "../../data/key"


class Github extends Component {
    constructor() {
        super()
        // false is the default for things that shouldn't display when they are not yet loaded
        this.state = {
            content: false
        }
    }

    // when component is loaded for the first time
    componentDidMount() {

        // fetch data form github
        fetch("https://api.github.com/users/jochem33/received_events", { 
            method: 'get', 
            headers: new Headers({
                // use api key from external file
              'Authorization': 'Basic '+btoa('jochem33:' + apikey), 
              'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        .then(response => response.json())
        .then((data) => {
            // create a new jsx element for each notification
            let content = data.map((notification, index) => {
                // get the event type without "Event"
                let event = notification.type.split("Event")[0]
                // if the event ends in an "e", add "d", else add "ed"
                if(event.charAt(event.length-1) === "e") {
                    event = event + "d"
                }
                else {
                    event = event +"ed"
                }


                return (
                    <div className="gitNotification" key={index}>
                        <Person name={notification.actor.display_login} imageUrl={notification.actor.avatar_url} showImage={true} link={notification.actor.url}/>
                        <p className="gitText">{event} {notification.payload.ref_type}: </p>
                        <p className="gitText">{notification.repo.name}</p>
                    </div>
                )
            })

            //update state with new jsx elements for notifications
            this.setState({
                content: content
            })
        })
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemGithub">
                <h1>Github</h1>
                { // if the data didn't load yet, display "loading...", else display the notifications
                this.state.content !== false ? this.state.content : <p>Loading...</p>}
          </div>
      )
    }
}

export default Github