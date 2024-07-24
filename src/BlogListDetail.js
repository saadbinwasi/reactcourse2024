import React from 'react'
import useFetch from './UseFetch'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function BlogListDetail() {

  const { id } = useParams()
  const {data: blog ,isPending} = useFetch('http://localhost:8060/blogs/' + id);
const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8060/blogs/' + blog.id,{
      method: 'DELETE'}).then(() => {
        history.push('/')
      })
  }
  return (
    <div>

      {isPending && <div>Loading..</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <div>{blog.author}</div>
          <button onClick={handleClick}>Delete blog</button>
      
        </article>
      )}
    </div>
  )
}

export default BlogListDetail
