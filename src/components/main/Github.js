import React, {Component} from "react"

import Person from "../sub/Person"

class Github extends Component {
    constructor() {
        super()
        this.state = {
            content: "Loading"
        }
    }


    componentDidMount() {
        console.log("aaaaaa")
        fetch("https://api.github.com/users/jochem33/received_events", { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Basic '+btoa('jochem33:f551e7465389336f8579a88352ee719a8e275d2d'), 
              'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        .then(response => response.json())
        .then((data) => {
            console.log("a", data)
            let firstFiveNotifications = data[0, 4]
            let content = data.map((notification) => {

            })
        })
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemGithub">
                <h1>Github</h1>
                {this.state.content}
                <Person />
          </div>
      )
    }
}

export default Github