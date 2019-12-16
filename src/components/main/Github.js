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
              'Authorization': 'Basic '+btoa('jochem33: fff859384e5b180705280d5961c1bff585d91c08'), 
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
                {/* <Person /> */}
          </div>
      )
    }
}

export default Github