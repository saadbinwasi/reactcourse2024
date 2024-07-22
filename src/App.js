import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';


function App() {
const [blogs,setBlog] = useState([
  {title: 'my new website', body: 'lorem ipsum...', author: 'mario' , id: 1},
  {title: 'Zero to 1', body: 'lorem ipsum...', author: 'saad' , id: 1},
  {title: 'the worry free mind', body: 'lorem ipsum...', author: 'sabih' , id: 1},
])
  



  return (
    <div className="App">
      <Navbar />

      <h1>Blogs</h1>
      <div className='content' >

  

        {blogs.map((blog) => (
          <div className='blog' key={blog.id}>
          <h2>TITLE: {blog.title}</h2>
          <p>Body:{blog.body}</p>
          <p>Written by: {blog.author}</p>
          </div>
        ))}

    




      </div>
    </div>
  );
}

export default App;
