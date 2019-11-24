import React, {Component} from "react"

import Bookmarks from "./components/main/Bookmarks"
import Crypto from "./components/main/Crypto"
import Exchange from "./components/main/Exchange"
import Favorites from "./components/main/Favorites"
import Github from "./components/main/Github"
import News from "./components/main/News"
import Time from "./components/main/Time"
import Weather from "./components/main/Weather"




class App extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        return (
          <div className="componentContainer">
                <Crypto />
                <Weather />
                <Bookmarks />
                <News />
                <Time />
                <Favorites />
                <Exchange />
                <Github />
          </div>
      )
    }
}

export default App