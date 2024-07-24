import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Listing(props) {

    
  return (
    <div>
          <h1>{props.title}</h1>
        {props.blogs.map((blog) => (
          
          <div className='blog' key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
          <h2>TITLE: {blog.title}</h2>
          <p>Body:{blog.body}</p>
          <p>Written by: {blog.author}</p>
            </Link>
         
         
          </div>
        ))}
    </div>
  )
}

export default Listing
