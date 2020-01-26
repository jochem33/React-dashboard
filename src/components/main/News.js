import React, {Component} from "react"

import ReadMore from "../sub/ReadMore"

class News extends Component {
    constructor() {
        super()
        this.state = {
            articleSource: {
                url: "newsapi.org",
                text: "newsapi"
            },
            articleText: "Loading...",
            articleTitle: "Loading..."
        }
    }


    fetchNews() {
        fetch("https://newsapi.org/v2/top-headlines?country=nl&apiKey=fce565e06e744a42be1d61af5dc0360b")
            .then(response => response.json())
            .then(data => {
                let article = data.articles[1]
                // console.log(article)
                this.setState({
                    articleSource: {
                        url: article.url,
                        text: article.source.name
                    },
                    articleText: article.content.split("[")[0],
                    articleTitle: article.title
                })
            }
        )
    }


    componentDidMount() {
        this.fetchNews()
    }

    
    render() {
        return (
          <div className="dashboardComponent gridItemNews">
                <h1>News</h1>
                <h2>{this.state.articleTitle}</h2>
                <p>{this.state.articleText}</p>
                <ReadMore linkText="News by NEWSAPI" linkUrl="newsapi.org"/>
                <ReadMore linkText={"Article: " + this.state.articleSource.text} linkUrl={this.state.articleSource.url}/>
          </div>
      )
    }
}

export default News
