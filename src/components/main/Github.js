import React, {Component} from "react"

import Person from "../sub/Person"
import apikey from "../../key"


class Github extends Component {
    constructor() {
        super()
        this.state = {
            content: "Loading..."
        }
    }


    componentDidMount() {
        console.log("aaaaaa")
        fetch("https://api.github.com/users/jochem33/received_events", { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Basic '+btoa('jochem33:' + apikey), 
              'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        .then(response => response.json())
        .then((data) => {
            let firstFiveNotifications = data.slice(0, 5)
            console.log(data)
            let content = data.map((notification) => {
                let event = notification.type.split("Event")[0]
                if(event.charAt(event.length-1) == "e") {
                    event = event + "d"
                }
                else {
                    event = event +"ed"
                }


                return (
                    <div className="gitNotification">
                        <Person name={notification.actor.display_login} imageUrl={notification.actor.avatar_url} link={notification.actor.url}/>
                        <p className="gitText">{event} {notification.payload.ref_type}: </p>
                        <p className="gitText">{notification.repo.name}</p>
                    </div>
                )
            })
            this.setState({
                content: content
            })
        })
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemGithub">
                <h1>Github</h1>
                {this.state.content}
                {/* <Person /> */}
          </div>
      )
    }
}

export default Github

// alleen notif fff859384e5b180705280d5961c1bff585d91c08

// https://developer.github.com/v3/activity/events/types/#followevent