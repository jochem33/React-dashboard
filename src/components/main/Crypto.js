import React, {Component} from "react"

import KeyValue from "../sub/KeyValue"
import ReadMore from "../sub/ReadMore"


class Crypto extends Component {
    constructor() {
        super()
        // setting up state
        // false is the default for things that shouldn't display when they are not yet loaded
        this.state = {
            fiat: "USD",
            crypto0: {
                regularName: "Bitcoin",
                regularTicker: "BTC",
                ticker: "XBT",
                price: false
            },
            crypto1: {
                regularName: "Litecoin",
                regularTicker: "LTC",
                ticker: "LTC",
                price: false
            },
            crypto2: {
                regularName: "Ripple",
                regularTicker: "XRP",
                ticker: "XRP",
                price: false
            },
            crypto3: {
                regularName: "Etherium",
                regularTicker: "ETH",
                ticker: "ETH",
                price: false
            },
            buttonDisabled: false
        }

        // bind function(s) that use setstate
        this.fetchData = this.fetchData.bind(this)

    }

    
    // this function fetches the data and updates state accordingly
    fetchData(){
        //disable refresh button while refreshing 
        this.setState({
            buttonDisabled: true
        })

        // fetching information for the first cryptocurrency (bitcoin)
        fetch("https://api.kraken.com/0/public/Ticker?pair=" + this.state.crypto0.ticker + this.state.fiat)
            .then(response => response.json())
            .then(data => {
                let price

                // if the api returns anything
                if (data.result != null){
                    // if the api didn't return an error
                    if (data.result["X" + this.state.crypto0.ticker + "Z" + this.state.fiat] != null){
                        price = data.result["X" + this.state.crypto0.ticker + "Z" + this.state.fiat].a[0]

                        //update state
                        this.setState({
                            crypto0: {
                                regularName: "Bitcoin",
                                regularTicker: "BTC",
                                ticker: "XBT",
                                price: price
                            }
                        })
                    }
                }
        })


        // fetching information for the second cryptocurrency (litecoin)
        fetch("https://api.kraken.com/0/public/Ticker?pair=" + this.state.crypto1.ticker + this.state.fiat)
            .then(response => response.json())
            .then(data => {
                let price
                if (data.result != null){
                    if (data.result["X" + this.state.crypto1.ticker + "Z" + this.state.fiat] != null){
                        price = data.result["X" + this.state.crypto1.ticker + "Z" + this.state.fiat].a[0]

                        this.setState({
                            crypto1: {
                                regularName: "Litecoin",
                                regularTicker: "LTC",
                                ticker: "LTC",
                                price: price
                            }
                        })
                    }
                }
        })


        // fetching information for the third cryptocurrency (ripple)
        fetch("https://api.kraken.com/0/public/Ticker?pair=" + this.state.crypto2.ticker + this.state.fiat)
            .then(response => response.json())
            .then(data => {
                let price
                if (data.result != null){
                    if (data.result["X" + this.state.crypto2.ticker + "Z" + this.state.fiat] != null){
                        price = data.result["X" + this.state.crypto2.ticker + "Z" + this.state.fiat].a[0]

                        this.setState({
                            crypto2: {
                                regularName: "Ripple",
                                regularTicker: "XRP",
                                ticker: "XRP",
                                price: price,
                            }
                        })
                    }
                }
        })


        // fetching information for the fourth cryptocurrency (Etherium)
        fetch("https://api.kraken.com/0/public/Ticker?pair=" + this.state.crypto3.ticker + this.state.fiat)
            .then(response => response.json())
            .then(data => {
                let price
                if (data.result != null){
                    if (data.result["X" + this.state.crypto3.ticker + "Z" + this.state.fiat] != null){
                        price = data.result["X" + this.state.crypto3.ticker + "Z" + this.state.fiat].a[0]

                        this.setState({
                            crypto3: {
                                regularName: "Etherium",
                                regularTicker: "ETH",
                                ticker: "ETH",
                                price: price,
                            },
                            buttonDisabled: false
                        })
                    }
                }
        })
    }


    componentDidMount() {
        // load cryptocurrency data when component is mounted
        this.fetchData()
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemCrypto">
              <h1>Crypto</h1>
                {this.state.crypto0.price ? <KeyValue keytitle={this.state.crypto0.regularTicker} value={this.state.crypto0.price} /> : <p>Loading...<br/></p> }
                {this.state.crypto1.price && <KeyValue keytitle={this.state.crypto1.regularTicker} value={this.state.crypto1.price} />}
                {this.state.crypto2.price && <KeyValue keytitle={this.state.crypto2.regularTicker} value={this.state.crypto2.price} />}
                {this.state.crypto3.price && <KeyValue keytitle={this.state.crypto3.regularTicker} value={this.state.crypto3.price} />}
                

                <button onClick={this.fetchData} disabled={this.state.buttonDisabled}>Refresh</button>
                <ReadMore linkUrl="https://kraken.com"/>

          </div>
      )
    }
}

export default Crypto