import React from 'react'
import Listing from './Listing';
import useFetch from './UseFetch';

function Home() {
const { data: blogs, isPending } = useFetch('http://localhost:8060/blogs');
  return (
    <div className='content' >
    {isPending && <div>Loading...</div>}
    {blogs && <Listing blogs={blogs} title="All blogs" />}
    {blogs && <Listing blogs={blogs.filter((blog) => blog.author === 'sabih')} title="sabih blogs" />}

  </div>
  )
}

export default Home
