import React, {Component} from "react"

import Person from "../sub/Person"


class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            contacts: "Loading...",
            name: "",
            email: "",
            imgurl: "",
            showForm: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleFormVisibillity = this.toggleFormVisibillity.bind(this);

    }


    updateContactList() {
        if (localStorage.getItem("contacts") !== null) {
            let localStorageContacts = localStorage.getItem("contacts")
            let parsedContacts;

            parsedContacts = eval(localStorageContacts)

            let mappedContacts = parsedContacts.map((person, index) => {
                return(
                    <Person name={person.name} showImage={false} imageUrl={person.imageUrl} key={index} email={person.email} link={"mailto:" + person.email}/>
                )
            })
            this.setState({
                contacts: mappedContacts
            })
        }
    }


    componentDidMount() {
        this.updateContactList()
    }


    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        this.addContact()
    }

    addContact() {
        let oldContacts = eval(localStorage.getItem("contacts"))

        if(oldContacts !== null){
            let newContacts = oldContacts.concat({name: this.state.name, imgurl: this.state.imgurl, email: this.state.email})
            localStorage.setItem("contacts", JSON.stringify(newContacts))
        } else {
            let newContacts = [{name: this.state.name, imgurl: this.state.imgurl, email: this.state.email}]
            localStorage.setItem("contacts", JSON.stringify(newContacts))
        }
        

        this.updateContactList()
        this.toggleFormVisibillity()
    }


    toggleFormVisibillity(){
        let showFormState = !this.state.showForm
        this.setState({
            showForm: showFormState
        })
    }
    
    
    render() {
        let showAddButton = false;
        let contacts = this.state.contacts

        if(contacts === "Loading..." || contacts === []) {
            contacts = <a onClick={this.toggleFormVisibillity} className="readmorelink">Add your first contact +</a>
        } else {
            showAddButton = true;
        }
        let showform = this.state.showForm ? "block" : "none"
        let antishowform = this.state.showForm ? "none" : "block"

        return (
          <div className="dashboardComponent gridItemFavorites">
                <h1>Favorites</h1>
                <form autoComplete="off" onSubmit={this.handleSubmit} style={{display: showform}} className="contactsform">
                    <label>
                        Name: 
                        <input
                            type="text"
                            placeholder="John Johnson"
                            name="name"
                            onChange={this.handleChange} 
                            value={this.state.name}
                        />
                    </label><br/>
                    <label>
                        Email: 
                        <input
                            type="email"
                            placeholder="johnJjohnson@example.com"
                            name="email"
                            onChange={this.handleChange} 
                            value={this.state.email}
                        />
                    </label><br/>
                    <label>
                        Image: 
                        <input
                            type="text"
                            placeholder="image url (optional)"
                            name="imgurl"
                            onChange={this.handleChange} 
                            value={this.state.imgurl}
                        />
                    </label><br/>
                    <input type="submit" value="submit"/>
                </form>
                <div style={{display: antishowform}}>
                    <div className="persons">
                        {contacts}
                    </div>
                    {showAddButton && 
                    <a onClick={this.toggleFormVisibillity} className="readmorelink">Add new contact +</a>}
                </div>
          </div>
      )
    }
}

export default Favorites
