import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Listing from './Listing';



function App() {

  const[name,setName] = useState('SAAD')
const [blogs,setBlog] = useState(null)
  
// const handleDelete = (id) => {

//   const newBlog = blogs.filter(blog => blog.id !== id)
//     setBlog(newBlog);

// }

useEffect(() => {
fetch('http://localhost:8000/blogs').then(res => {
     return res.json();
}).then((data => {
  setBlog(data)
}))
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

{ blogs && <Listing blogs={blogs} title="All blogs" />}
 { blogs &&  <Listing blogs={blogs.filter((blog) => blog.author === 'sabih')} title="sabih blogs" />}

      

    




      </div>
    </div>
  );
}

export default App;
