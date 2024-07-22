import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Listing from './Listing';


function App() {
const [blogs,setBlog] = useState([
  {title: 'my new website', body: 'lorem ipsum...', author: 'mario' , id: 1},
  {title: 'Zero to 1', body: 'lorem ipsum...', author: 'saad' , id: 2},
  {title: 'the worry free mind', body: 'lorem ipsum...', author: 'sabih' , id: 3},
])
  
const handleDelete = (id) => {

  const newBlog = blogs.filter(blog => blog.id !== id)
    setBlog(newBlog);

}

useEffect(() => {

},[setBlog])


  return (
    <div className="App">
      <Navbar />


      <div className='content' >

  <Listing blogs={blogs} title="All blogs" handleDelete={handleDelete} />
  <Listing blogs={blogs.filter((blog) => blog.author === 'sabih')} title="sabih blogs" />

      

    




      </div>
    </div>
  );
}

export default App;
