import React, {Component} from "react"

import ReadMore from "../sub/ReadMore"

class News extends Component {
    constructor() {
        super()
        // setting up state
        // false is the default for things that shouldn't display when they are not yet loaded
        this.state = {
            articleSource: {
                url: "newsapi.org",
                text: "newsapi"
            },
            articleText: false,
            articleTitle: false
        }
    }


    // fetch a news article
    fetchNews() {
        // make api call
        fetch("https://newsapi.org/v2/top-headlines?country=nl&apiKey=fce565e06e744a42be1d61af5dc0360b")
            .then(response => response.json())
            .then(data => {
                // grab only the first article 
                let article = data.articles[1]
                // add article data to state
                this.setState({
                    articleSource: {
                        url: article.url,
                        text: article.source.name
                    },
                    // remove some metadata in the article text
                    articleText: article.content.split("[")[0],
                    articleTitle: article.title
                })
            }
        )
    }


    // fetch a news article when the page loads
    componentDidMount() {
        this.fetchNews()
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemNews">
                <h1>News</h1>
                { // display article text and title only if the article loaded
                this.state.articleTitle !== false && <h2>{this.state.articleTitle}</h2>}
                {this.state.articleText !== false && <p>{this.state.articleText}</p>}
                <ReadMore linkText="News by NEWSAPI" linkUrl="newsapi.org"/>
                <ReadMore linkText={"Article: " + this.state.articleSource.text} linkUrl={this.state.articleSource.url}/>
          </div>
      )
    }
}

export default News
