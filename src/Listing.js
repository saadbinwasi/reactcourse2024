import React from 'react'

function Listing(props) {

    
  return (
    <div>
          <h1>{props.title}</h1>
        {props.blogs.map((blog) => (
          
          <div className='blog' key={blog.id}>
          <h2>TITLE: {blog.title}</h2>
          <p>Body:{blog.body}</p>
          <p>Written by: {blog.author}</p>
          <button onClick={() => props.handleDelete(blog.id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default Listing
