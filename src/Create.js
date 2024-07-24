import React, { useState } from 'react'

function Create() {

    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('saad')
    const [body,setBody] = useState('')

  return (
    <div>

        <h1>Add a new Blog</h1>

        <form>
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
  <button>Add A Blog</button>


        </form>
      
    </div>
  )
}

export default Create
