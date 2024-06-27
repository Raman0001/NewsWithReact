import React from 'react'
import { Link } from 'react-router-dom';
  const NewsItem =(props)=>{
    let {title, description, imageUrl, url,author,date,name} = props;
    return (
        <div className='my-4'>
          <div className="card">
          <img src={imageUrl?imageUrl:"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <Link to={url} target="_blank" className="btn btn-sm btn-dark">Read more</Link>
          </div>
        </div>
        </div>
    )
}
export default NewsItem;