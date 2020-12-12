import React from 'react';
import SingleBlogPost from './BlogPostSingle';
import './BlogPostPreview.css';
import { Link } from 'react-router-dom'


const List = ({post}) => {
  let sortedList = [];
  sortedList = post.sort((a, b) => b.visitingdate - a.visitingdate)
  return (
    <Link to={`/post/${post.id}`}>
    <div className="Card__row">
       {sortedList.map(post => {return(
      <div className="Card" key={post.id}><SingleBlogPost post={post}/></div>)})}
      </div>
    </Link>
  )
}

export default List