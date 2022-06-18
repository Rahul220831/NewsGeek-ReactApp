import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Bavaria train crash: At least three killed in German rail accident",
      description:
        "At least three people die and some 60 are injured after a train derails in Bavaria.",
      url: "http://www.bbc.co.uk/news/world-europe-61684048",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/EE22/production/_125026906_gettyimages-1241072849.jpg",
      publishedAt: "2022-06-03T13:52:24.411446Z",
      content:
        "Image source, Getty Images\r\nAt least three people were killed and about 60 injured when a train derailed in Germany's south-eastern state of Bavaria, police say. \r\nThe train, which was carrying many … [+1502 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Platinum Jubilee: Queen's faith celebrated at thanksgiving service",
      description:
        "The Queen watches the service at home but senior royals and Prince Harry and Meghan gather at St Paul's.",
      url: "http://www.bbc.co.uk/news/uk-61681066",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/11EE2/production/_125024437_hi076481357.jpg",
      publishedAt: "2022-06-03T13:52:20.8966952Z",
      content:
        'By Joseph Lee &amp; George BowdenBBC News\r\nMedia caption, WATCH: Prince Harry and Meghan arrive at Jubilee service\r\nThe Archbishop of York praised the Queen\'s "service and faithfulness" as royals joi… [+5330 chars]',
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Madhya Pradesh: Viral video shows India woman risking life for water",
      description:
        "It shows the woman going down a well without a rope or harness to access water.",
      url: "http://www.bbc.co.uk/news/world-asia-india-61679615",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/5E73/production/_124997142_water-ani.jpg",
      publishedAt: "2022-06-03T11:37:23.2113425Z",
      content:
        "A viral video showing a woman scaling the wall of a well to access water has highlighted the acute shortage in several areas of the central Indian state of Madhya Pradesh.\r\nThe video shows the woman … [+1853 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "In pictures: Who is at Queen's Thanksgiving service",
      description:
        "Royal family and politicians gather at St Paul's, as the Queen watches on television from Windsor.",
      url: "http://www.bbc.co.uk/news/uk-61681180",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/15272/production/_125024668_gettyimages-1241071246.jpg",
      publishedAt: "2022-06-03T11:22:18.5700023Z",
      content:
        "The Royal Family and guests are attending a service of Thanksgiving for the Queen for her Platinum Jubilee at St Paul's Cathedral - but without the monarch herself. She is resting at Windsor Castle a… [+1366 chars]",
    },
  ];
  constructor(props) {
    super(props);

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = `${this.cfl(this.props.category)}-NewsGeek`;
  }
  cfl = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async updateNews(pageNo) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c5f2e9ad307401daa3b11271282c9ab&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c5f2e9ad307401daa3b11271282c9ab&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handleNextClick = async () => {
    //   if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){}

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c5f2e9ad307401daa3b11271282c9ab&page=${
    //   this.state.page + 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading:false
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c5f2e9ad307401daa3b11271282c9ab&page=${
        this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
   
  };
  render() {
    return (
      <div className="bg-success p-2 text-dark bg-opacity-25">
        <div className="container my-3">
          <h2 className="text-center">
            NewsGeek- {this.cfl(this.props.category)} Trending News{" "}
          </h2>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
            
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
         
        </div>
      </div>
    );
  }
}

export default News;
