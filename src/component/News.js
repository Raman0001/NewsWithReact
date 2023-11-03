import React, {useEffect, useState } from 'react';
import NewsItem from './NewsItem.js';
import PropTypes from 'prop-types';
import Loading from './sea.js';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{
    const [articles,setarticles]= useState([]);
    const [Loading,setLoading]= useState(true);
    const [page,setpage]= useState(1);
    const [totalResults,settotalResults]= useState(0);
    const capaitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const updatenew = async()=> {
        props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        props.setProgress(10)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(50)
        // console.log(parsedData);
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(()=>{
        updatenew();
    },[])
    const handlePrevClick = async () => {
        setpage(page-1)
       updatenew();
    }
    const handleNextClick = async () => {
        setpage(page+1)
        updatenew();
    }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults)
    };
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>newsMonkey -Top {props.category} Headlines</h2>
                {/* {<Loading/>} */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !==totalResults}
                    // loader={<h4><Loading/></h4>}
                    >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                // console.log(element)
                                return(<div className="col-md-3" key={element.url} >
                                    <NewsItem title={element.title} author={element.author} date={element.publishedAt} description={element.description} imageUrl={element.urlToImage} url={element.url} />
                                </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )        
}
    News.defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }
    News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
}
export default News;