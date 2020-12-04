import React from 'react';
//import Avatar from '../avatar/Avatar'

const SingleBlogPost = ({post}) => {
  return (
    <section>
      <div>
        <div>
          <img src={post.image} />
          <h4>{post.city}</h4>
          <h5>{post.country}</h5>
        </div>
      </div>
      <p>{post.description}</p>
      <p style={{ fontStyle: "oblique" }}>more...</p>
    </section>
  )
}

export default SingleBlogPost