import React, {Component} from "react"

import Person from "../sub/Person"


class Favorites extends Component {
    constructor() {
        super()
        // setting up state
        // false is the default for things that shouldn't display when they are not yet loaded
        this.state = {
            contacts: false,
            name: "",
            email: "",
            imgurl: "",
            showForm: false
        }

        // bind function(s) that use setstate
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleFormVisibillity = this.toggleFormVisibillity.bind(this)
    }


    // funtion used for creating jsx elements for all contacts currently in localstorage
    updateContactList() {
        // if localstorage isnt empty
        if (localStorage.getItem("contacts") !== null) {
            // get localstorage item called "contacts" and put them in a var
            let localStorageContacts = localStorage.getItem("contacts")
            let parsedContacts

            // parse contacts from string to JSON
            parsedContacts = eval(localStorageContacts)

            // create a jsx element for all contacts
            let mappedContacts = parsedContacts.map((person, index) => {
                return(
                    <Person name={person.name} showImage={false} imageUrl={person.imageUrl} key={index} email={person.email} link={"mailto:" + person.email}/>
                )
            })

            // put new jsx elements in state
            this.setState({
                contacts: mappedContacts
            })
        }
    }


    // update contact list when page loads
    componentDidMount() {
        this.updateContactList()
    }


    // keep state synchronized with form fields
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }


    //function that runs when form is submitted
    handleSubmit(event) {
        // prevent form from submitting the default way (go to new page)
        event.preventDefault()
        // call function that adds the contact to localstorage
        this.addContact()
    }


    // function that adds a contact to localstorage
    addContact() {
        // get the old localstorage value for "contacts"
        let oldContacts = eval(localStorage.getItem("contacts"))
        
        // if there are already contacts
        if(oldContacts !== null){
            // add new contact to list with old contacts and the new one
            let newContacts = oldContacts.concat({name: this.state.name, imgurl: this.state.imgurl, email: this.state.email})
            // put new contact list in localstorage
            localStorage.setItem("contacts", JSON.stringify(newContacts))
        } else { //else
            // create a new list with the first contact
            let newContacts = [{name: this.state.name, imgurl: this.state.imgurl, email: this.state.email}]
            // put the contactlist in localstorage
            localStorage.setItem("contacts", JSON.stringify(newContacts))
        }
        
        // calls a function that shows all contacts form localstorage 
        this.updateContactList()
        // calls a function that hides the new contact form
        this.toggleFormVisibillity()
    }


    // hides/shows the new contact form
    toggleFormVisibillity(){
        let showFormState = !this.state.showForm
        this.setState({
            showForm: showFormState
        })
    }
    
    
    render() {
        let showAddButton = false
        let contacts = this.state.contacts

        // if there are no contacts yet, show the "add your first contact" button
        if(contacts === false || contacts === []) {
            contacts = <a onClick={this.toggleFormVisibillity} className="readmorelink">Add your first contact +</a>
        } else { // else show the normal add button
            showAddButton = true
        }

        // when form is shown, the contact list is hidden and vice versa
        let showform = this.state.showForm ? "block" : "none"
        let showContactList = this.state.showForm ? "none" : "block"

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
                <div style={{display: showContactList}}>
                    <div className="persons">

                        {contacts && contacts}

                    </div>
                    {showAddButton && <a onClick={this.toggleFormVisibillity} className="readmorelink">Add new contact +</a>}
                </div>
          </div>
      )
    }
}

export default Favorites
