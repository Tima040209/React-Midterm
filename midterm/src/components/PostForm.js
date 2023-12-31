import React, { useEffect, useState,useRef } from 'react'

function PostForm(props) {
    const [input,setInput] = useState(props.edit ? props.edit.value
        : '')
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault()
  
        props.onSubmit({
          id: Math.floor(Math.random()*1000),
          text: input
        });
  
        setInput('')
      }
  return (
    <>
    <form onSubmit={handleSubmit}>
    {props.edit ? (
            <>
            <input type='text' 
          placeholder='Update your post' 
          value={input} 
          name='text' 
          className='post-input'
          onChange={handleChange}
          ref={inputRef}
        />
          <button className='post-button'>Update</button>
            </>
        ):
        (
            <>
            <input type='text' 
          placeholder='Add a post' 
          value={input} 
          name='text' 
          className='post-input'
          onChange={handleChange}
          ref={inputRef}
        />
          <button className='post-button'>Add</button>
            </>
        )}
    </form>
    </>
  )
}

export default PostForm