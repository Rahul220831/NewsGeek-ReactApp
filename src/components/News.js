import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
 const cfl = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const[articles,setarticles] = useState([]);
  const[loading,setloading] = useState(true);
  const[page,setpage] = useState(0);
  const[totalResults,settotalResults] = useState(0);
  document.title = `${cfl(props.category)}-NewsGeek`;
  
  
  
  const updateNews=async(pageNo) =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6c5f2e9ad307401daa3b11271282c9ab&page=1&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    
      setarticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
      setloading(false)
  }
  useEffect(()=>{
    updateNews();
  },[])
  

 
  const fetchMoreData = async() => {
    setpage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6c5f2e9ad307401daa3b11271282c9ab&page=${
        page + 1}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url)
    let parsedData = await data.json();
    
      setarticles(articles.concat(parsedData.articles))
      settotalResults(parsedData.totalResults)
      setloading(false)
    
   
  };
  
    return (
      <div className="bg-success p-2 text-dark bg-opacity-25">
        <div className="container my-3">
          <h2 className="text-center">
            NewsGeek- {cfl(props.category)} Trending News{" "}
          </h2>
          {/* {state.loading && <Spinner/>} */}
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
            
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="row">
              {articles.map((element) => {
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

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
