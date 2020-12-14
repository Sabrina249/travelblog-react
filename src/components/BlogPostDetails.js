import React from 'react';
import {useParams} from 'react-router-dom'
import post from './post'
import SingleBlogPost from './BlogPostSingle';


const Details = () => {

//getID from Params
  const { id } = useParams()

  //console.log(post)
 // console.log(id)

//find matchingBlogpost for id
  const matchingBlog = post.find(post => post.id === parseInt(id))

console.log(matchingBlog)
console.log(id)

//display backbutton and Blogpost
  return (
    <div>
    <div><SingleBlogPost post={matchingBlog}/></div>
    </div>
  )
}

export default Details;