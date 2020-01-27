import React, {Component} from "react"

import KeyValue from "../sub/KeyValue"
import ReadMore from "../sub/ReadMore"


class Crypto extends Component {
    constructor() {
        super()
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

        this.fetchData = this.fetchData.bind(this)

    }

    
    fetchData(){
        this.setState({
            buttonDisabled: true
        })
        fetch("https://api.kraken.com/0/public/Ticker?pair=" + this.state.crypto0.ticker + this.state.fiat)
            .then(response => response.json())
            .then(data => {
                let price
                if (data.result != null){
                    if (data.result["X" + this.state.crypto0.ticker + "Z" + this.state.fiat] != null){
                        price = data.result["X" + this.state.crypto0.ticker + "Z" + this.state.fiat].a[0]

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