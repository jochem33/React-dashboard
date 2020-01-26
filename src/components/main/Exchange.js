import React, {Component} from "react"

import KeyValue from "../sub/KeyValue"

class Exchange extends Component {
    constructor() {
        super()
        this.state = {
            base: "Loading...",
            rates: "Loading...",
            results: [],
            currencies: "USD,GBP",
            possibleSearches: [],
            allRates: "Loading...",
            search: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount() {
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


        fetch("https://api.exchangeratesapi.io/latest?base=EUR")
            .then(response => response.json())
            .then(data => {
                let keys = Object.keys(data.rates)

                this.setState({
                    allRates: data.rates,
                    possibleSearches: keys
                })
            })
    }


    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

        this.updateResultList(value)
    }


    updateResultList(searchValue) {
        if(searchValue !== ""){
            let matchingSearches = []
            for(let i = 0; i < this.state.possibleSearches.length; i++){
                if(this.state.possibleSearches[i].includes(searchValue.toUpperCase())){
                    matchingSearches.push(this.state.possibleSearches[i])
                }
            }
            this.setState({
                results: matchingSearches
            })
        } else {
            this.setState({
                results: []
            })
        }
    }


    addcurrency(result){
        let newCurrency = <KeyValue keytitle={result} value={this.state.allRates[result]}/>
        let newResultsState = this.state.rates.concat(newCurrency)

        this.setState({
            rates: newResultsState,
            result: [],
            search: ""
        })
    }

    
    render() {
        let searchResults = this.state.results.map((result) => {
            return (<div>
                    <button className="resultbutton" onClick={() => {this.addcurrency(result)}}>{result}</button>
                    <br/>
                </div>)
        })

        return (
            <div className="dashboardComponent gridItemExchange">
                <h1>Exchange</h1>
                <p>{this.state.base}</p>
                {this.state.rates}

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