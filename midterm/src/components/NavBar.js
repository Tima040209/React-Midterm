import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
    <div className='NavBar'>
        <Link to="/home"><h1>Home</h1></Link>
        <Link to="/post"><h1>Post</h1></Link>
        <Link to="/profile"><h1>Profile</h1></Link>
        <button>Sign in </button>
        <button>Sign up </button>
    </div>
    </>
  )
}

export default NavBar