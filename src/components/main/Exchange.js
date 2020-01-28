import React, {Component} from "react"

import KeyValue from "../sub/KeyValue"

class Exchange extends Component {
    constructor() {
        super()

        // setting up state
        // false is the default for things that shouldn't display when they are not yet loaded
        this.state = {
            base: false,
            rates: false,
            results: [],
            currencies: "USD,GBP",
            possibleSearches: [],
            allRates: false,
            search: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount() {
        // fetch data for default currencies found in this.state.currencies
        fetch("https://api.exchangeratesapi.io/latest?base=EUR&symbols=" + this.state.currencies)
            .then(response => response.json())
            .then(data => {
                let keys = Object.keys(data.rates)
                let base = data.base
                let newRates = keys.map((key, index) => {
                    return (
                        <KeyValue keytitle={key} key={index} value={data.rates[key]}/>
                        )
                })
                this.setState({
                    base: base,
                    rates: newRates
                })
            })

        // fetch data for other currencies
        fetch("https://api.exchangeratesapi.io/latest?base=EUR")
            .then(response => response.json())
            .then(data => {
                // put all tickers in a list (used for search results)
                let keys = Object.keys(data.rates)

                this.setState({
                    allRates: data.rates,
                    possibleSearches: keys
                })
            })
    }

    // keeping state and the search field synchronized
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

        // update list off suggestions
        this.updateResultList(value)
    }


    // update list off suggestions
    updateResultList(searchValue) {
        // if the searchfield isn't empty
        if(searchValue !== ""){
            let matchingSearches = []

            // for each ticker in this.state.possibleSearches
            for(let i = 0; i < this.state.possibleSearches.length; i++){
                // if current searchfield text is in ticker i and isn't already added
                if(this.state.possibleSearches[i].includes(searchValue.toUpperCase()) && !this.state.currencies.includes(this.state.possibleSearches[i])){
                    // put ticker matching searchquery in list with results
                    matchingSearches.push(this.state.possibleSearches[i])
                }
            }

            // update state with matching tickers
            this.setState({
                results: matchingSearches
            })
        } else { // if the searchfield is empty, dont show suggestions
            this.setState({
                results: []
            })
        }
    }


    // function for adding a new currency to the list
    addcurrency(result){
        // if the currency isn't already added
        if(!this.state.currencies.includes(result)) {
            //create a new jsx element for new currency
            let newCurrency = <KeyValue keytitle={result} value={this.state.allRates[result]}/>
            // add the jsx element to a list with all jsx elements with currencies
            let newResultsState = this.state.rates.concat(newCurrency)
            // add the ticker of the new currency to the currency list
            let currencies = this.state.currencies + result
    
            // update state with the new currency
            this.setState({
                rates: newResultsState,
                results: [],
                search: "",
                currencies: currencies
            })

            // empty the list with search suggestions
            this.updateResultList("")
        }
    }

    
    render() {
        // create a jsx button element for all search suggetions
        let searchResults = this.state.results.map((result, index) => {
            return (<div key={index}>
                    <button className="resultbutton" onClick={() => {this.addcurrency(result)}}>{result}</button>
                    <br/>
                </div>)
        })

        return (
            <div className="dashboardComponent gridItemExchange">
                <h1>Exchange</h1>
                <p>{this.state.base}</p>
                {this.state.rates !== false ? this.state.rates : <p>Loading...<br/></p>}

                <input
                    autoComplete="off"
                    className="searchbox"
                    type="text"
                    placeholder="search"
                    name="search"
                    onChange={this.handleChange} 
                    value={this.state.search}
                />
                {searchResults}
                <br/><br/>
            </div>
      )
    }
}

export default Exchange