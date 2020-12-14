import React from 'react';
import SingleBlogPost from './BlogPostSingle';
import './BlogPostPreview.css';
import { Link } from 'react-router-dom'
import post from './post';


const List = () => {
  let sortedList = [];
  sortedList = post.sort((a, b) => b.visitingdate - a.visitingdate)
  return (
    <div className="Card__row">
       {sortedList.map(post => {return(
      <div className="Card" key={post.id}><Link to={`/post/${post.id}`}><SingleBlogPost post={post}/></Link></div>
      )})}
      </div>
  )
}

export default List