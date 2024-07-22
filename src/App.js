import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Listing from './Listing';



function App() {

  const[name,setName] = useState('SAAD')
const [blogs,setBlog] = useState()
  
const handleDelete = (id) => {

  const newBlog = blogs.filter(blog => blog.id !== id)
    setBlog(newBlog);

}

useEffect(() => {
console.log("useEffects ran")
console.log(blogs)
},[])

useEffect(() => {
  console.log("useEffects ran")
  console.log(name)
  },[name])

  return (
    <div className="App">
      <Navbar />


      <div className='content' >

        <h1>{name}</h1>
        <button onClick={() => setName('KHAN')}>change name</button>

  <Listing blogs={blogs} title="All blogs" handleDelete={handleDelete} />
  <Listing blogs={blogs.filter((blog) => blog.author === 'sabih')} title="sabih blogs" />

      

    




      </div>
    </div>
  );
}

export default App;
