import React from 'react';
import TeaserPicture from './TeaserPicture.js'
import './BlogPostSingle.css';

const SingleBlogPost = ({post}) => {
  return (
      <div className="Container_singlepost">
        <div>
          <TeaserPicture img={post.image} />
          <h4>{post.title}</h4>
          <div className="Container_twoinfosinrow">
          <div className="Wrap_preview">
          <h4>{post.visitingdate.toDateString()}</h4>
          </div>
          <div className="Wrap_preview">
          <div img={post.authorsimg}/>
          <h4>{post.authorsname}</h4>
          </div>
          </div>
        </div>
      <p>{post.description}</p>
      <div className="Container_twoinfosinrow">
      <h5>{post.country}</h5>
      <h4>{post.city}</h4>
      </div>
      </div>
  )
}

export default SingleBlogPost