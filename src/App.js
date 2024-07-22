import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Listing from './Listing';
import useFetch from './UseFetch';



function App() {

  const { data: blogs, isPending } = useFetch('http://localhost:8000/blogs');
  return (
    <div className="App">


      <Navbar />

      <div className='content' >
        {isPending && <div>Loading...</div>}
        {blogs && <Listing blogs={blogs} title="All blogs" />}
        {blogs && <Listing blogs={blogs.filter((blog) => blog.author === 'sabih')} title="sabih blogs" />}

      </div>
    </div>
  );
}

export default App;
