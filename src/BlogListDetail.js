import React from 'react'
import useFetch from './UseFetch'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function BlogListDetail() {

  const { id } = useParams()
  const {data: blog ,isPending} = useFetch('http://localhost:8060/blogs/' + id);
  return (
    <div>

      {isPending && <div>Loading..</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <div>{blog.author}</div>
      
        </article>
      )}
    </div>
  )
}

export default BlogListDetail
