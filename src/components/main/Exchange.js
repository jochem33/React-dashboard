import React, {Component} from "react"

import KeyValue from "../sub/KeyValue"
import Search from "../sub/Search"


class Exchange extends Component {
    constructor() {
        super()
        this.state = {
            base: "Loading...",
            rates: "Loading..."
        }
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=EUR&symbols=USD,GBP,CAD,JPY")
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                let keys = Object.keys(data.rates)
                let base = data.base
                let newRates = keys.map((key) => {
                    return (
                        <KeyValue keytitle={key} value={data.rates[key]}/>
                        )
                })
                this.setState({
                    base: base,
                    rates: newRates
                })
            })
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemExchange">
                <h1>Exchange</h1>
                <p>{this.state.base}</p>
                {this.state.rates}
                {/* <KeyValue /> */}
                {/* <Search /> */}
          </div>
      )
    }
}

export default Exchange