import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function BlogListDetail() {

  const {id} = useParams()
  return (
    <div>

        <h1>Blog Detail {id} </h1>
      
    </div>
  )
}

export default BlogListDetail
