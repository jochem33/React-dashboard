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
                price: "Loading..."
            },
            crypto1: {
                regularName: "Litecoin",
                regularTicker: "LTC",
                ticker: "LTC",
                price: "Loading..."
            },
            crypto2: {
                regularName: "Ripple",
                regularTicker: "XRP",
                ticker: "XRP",
                price: "Loading..."
            },
            crypto3: {
                regularName: "Etherium",
                regularTicker: "ETH",
                ticker: "ETH",
                price: "Loading..."
            }
        }
    }

    // getPrice(index){
    //     fetch("https://api.kraken.com/0/public/Ticker?pair=" + this.state.cryptos[index].ticker + this.state.fiat)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("__________")

    //         console.log(index, data)

    //         let price = "loading";
    //         if (data.result != null){
    //             console.log(this.state.cryptos)
    //             if (data.result["X" + this.state.cryptos[index].ticker + "Z" + this.state.fiat] != null){
    //                 price = data.result["X" + this.state.cryptos[index].ticker + "Z" + this.state.fiat].a[0]
    //                 console.log("a", index, price)

    //                 this.setState({
    //                     cryptos: {
    //                         [index]: {
    //                             price: price
    //                         }
    //                     }
    //                 })
    //             }
    //         }
    //     })
    // }


    fetchData(){
        // for (var i = 0; i < 3; i++) {
        //     this.getPrice(i)
        // }

        fetch("https://api.kraken.com/0/public/Ticker?pair=" + this.state.crypto0.ticker + this.state.fiat)
            .then(response => response.json())
            .then(data => {
                console.log(0, data)

                let price = "loading";
                if (data.result != null){
                    if (data.result["X" + this.state.crypto0.ticker + "Z" + this.state.fiat] != null){
                        price = data.result["X" + this.state.crypto0.ticker + "Z" + this.state.fiat].a[0]
                        console.log(1, price)

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
                console.log(1, data)

                let price = "loading";
                if (data.result != null){
                    if (data.result["X" + this.state.crypto1.ticker + "Z" + this.state.fiat] != null){
                        price = data.result["X" + this.state.crypto1.ticker + "Z" + this.state.fiat].a[0]
                        console.log(1, price)

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
                console.log(2, data)

                let price = "loading";
                if (data.result != null){
                    if (data.result["X" + this.state.crypto2.ticker + "Z" + this.state.fiat] != null){
                        price = data.result["X" + this.state.crypto2.ticker + "Z" + this.state.fiat].a[0]
                        console.log(2, price)

                        this.setState({
                            crypto2: {
                                regularName: "Ripple",
                                regularTicker: "XRP",
                                ticker: "XRP",
                                price: price
                            }
                        })
                    }
                }
        })

        fetch("https://api.kraken.com/0/public/Ticker?pair=" + this.state.crypto3.ticker + this.state.fiat)
            .then(response => response.json())
            .then(data => {
                console.log(3, data)

                let price = "loading";
                if (data.result != null){
                    if (data.result["X" + this.state.crypto3.ticker + "Z" + this.state.fiat] != null){
                        price = data.result["X" + this.state.crypto3.ticker + "Z" + this.state.fiat].a[0]
                        console.log(3, price)

                        this.setState({
                            crypto3: {
                                regularName: "Etherium",
                                regularTicker: "ETH",
                                ticker: "ETH",
                                price: price
                            }
                        })
                    }
                }
        })

        console.log("fetchEnd")
    }


    componentDidMount() {
        console.log("Mount")

        this.fetchData()
    }


    changeCrypto(ticker){
        console.log("____________")
        this.setState({
            crypto: ticker
        })
        console.log("changeticker")
        this.fetchData()
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("didupdate")
    }
    
    render() {
        console.log("render")

        console.log(this.state.crypto0)

        return (
          <div className="dashboardComponent gridItemCrypto">
              <h1>Crypto</h1>

                <KeyValue keytitle={this.state.crypto0.regularTicker} value={this.state.crypto0.price} />
                <KeyValue keytitle={this.state.crypto1.regularTicker} value={this.state.crypto1.price} />
                <KeyValue keytitle={this.state.crypto2.regularTicker} value={this.state.crypto2.price} />
                <KeyValue keytitle={this.state.crypto3.regularTicker} value={this.state.crypto3.price} />

                <ReadMore linkUrl="https://kraken.com"/>

          </div>
      )
    }
}

export default Crypto