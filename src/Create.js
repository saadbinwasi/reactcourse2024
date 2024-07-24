import React, { useState } from 'react'

function Create() {

    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('saad')
    const [body,setBody] = useState('')
    const [isPending,setIspending] = useState(false)

    const handleSubmit = (e) => {
     e.preventDefault();
     const blog = {title,body,author}

     setIspending(true);

     fetch('http://localhost:8060/blogs',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
     }).then(() => {
        console.log('new blog added')
        setIspending(false);
     })
    }

  return (
    <div>

        <h1>Add a new Blog</h1>

        <form onSubmit={handleSubmit}>
            <label>Blog title</label>
            <input type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
             <label>Blog Body</label>
             <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
            required
            ></textarea>
            <label>Blog Author</label>
            <select value={author}
            onChange={(e) => setAuthor(e.target.value)}>
                <option value='saad'>saad</option>
                <option value='sabih'> sabih</option>
            </select>
  {!isPending && <button>Add A Blog</button>}
  {isPending && <button disabled>Adding Blog...</button>}


        </form>
      
    </div>
  )
}

export default Create
