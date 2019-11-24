import React, {Component} from "react"

import KeyValue from "../sub/KeyValue"
import ReadMore from "../sub/ReadMore"



class Crypto extends Component {
    constructor() {
        super()
        this.state = {
            crypto: "XETH",
            fiat: "ZUSD",
            // loading: false,
            priceInfo: {},
            specificprice: "Loading..."
        }
    }

    fetchData(){
        console.log("Pair: " + this.state.crypto + this.state.fiat)

        fetch("https://api.kraken.com/0/public/Ticker?pair=" + this.state.crypto + this.state.fiat)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            let price = "loading";
            if (data.result != null){
                if (data.result[this.state.crypto + this.state.fiat] != null){
                    price = data.result[this.state.crypto + this.state.fiat].a[0]
                    this.setState({
                        // loading: false,
                        priceInfo: data,
                        specificprice: price
                    })
                }
            }
        })
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


    componentWillUpdate(prevProps, prevState) {
        console.log("willupdate")
    }

    
    render() {
        console.log("render")

        // let datanotloaded = true
        // if (this.state.priceInfo.result != null){
        //     if (this.state.priceInfo.result[this.state.crypto + this.state.fiat] != null){
        //         datanotloaded = false
        //     }
        // }


        return (
          <div className="dashboardComponent gridItemCrypto">
              <h1>Crypto</h1>
                <KeyValue />
                <ReadMore />
                <h3>{this.state.crypto}</h3>
                {/* <p>{datanotloaded ? "loading..." : this.state.priceInfo.result[this.state.crypto + this.state.fiat].a[0]}</p> */}

                <p>{this.state.specificprice}</p>
                <button onClick={() => {this.changeCrypto("XETC")}}>ETC</button>
                <button onClick={() => {this.changeCrypto("XETH")}}>ETH</button>
                <button onClick={() => {this.changeCrypto("XXRP")}}>XRP</button>
          </div>
      )
    }
}

export default Crypto