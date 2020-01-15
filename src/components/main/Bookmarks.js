import React, {Component} from "react"

import bookmarksData from "../../data/bookmarksData"

class Bookmarks extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    
    render() {
        let bookmarks = bookmarksData.map((bookmark, index) => {
            return(
                   <a className="bookmarkLink" key={index} href={bookmark.url}>{bookmark.text}</a>
                )
        })

        return (
          <div className="dashboardComponent gridItemBookmarks">
                <h1>Bookmarks</h1>
                <br/>
                {bookmarks}
          </div>
      )
    }
}

export default Bookmarks