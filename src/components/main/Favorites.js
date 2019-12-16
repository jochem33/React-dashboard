import React, {Component} from "react"

import Person from "../sub/Person"
// import contactsData from "../../contactsData"


class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            contacts: "Loading..."
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=8&nat=nl&noinfo")
            .then(response => response.json())
            .then(persondata => {
                let reactObjects = persondata.results.map((person) => {
                    return(
                        <Person name={person.name.first + " " + person.name.last} imageUrl={person.picture.thumbnail}/>
                    )
                })

                this.setState({
                    contacts: reactObjects
                })
        })
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemFavorites">
                <h1>Favorites</h1>
                <div className="persons">
                    {this.state.contacts}
                </div>
          </div>
      )
    }
}

export default Favorites
