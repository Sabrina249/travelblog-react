import React from 'react';
import SingleBlogPost from '../components/SinglePostPreview';
import './BlogPostPreview.css';

const List = ({post}) => {
  return (
    <div className="Card__row">
      <div className="Card Card__img"><SingleBlogPost post={post[0]}/></div>
      <div className="Card Card__img"><SingleBlogPost post={post[1]}/></div>
      <div className="Card Card__img"><SingleBlogPost post={post[2]}/></div>
      <div className="Card Card__img"><SingleBlogPost post={post[3]}/></div>
      </div>
  )
}

export default List