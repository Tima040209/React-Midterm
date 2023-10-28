import React,{useState} from 'react'
import PostForm from './PostForm';
import Post from './Post';

function PostList() {
    const[posts,setPosts] = useState([])

    const addPost = post => {
        if(!post.text){
            return;
        }
        const newPosts = [post, ...posts]

        setPosts(newPosts)
    }
    const removePost = id => {
        const removeArr = [...posts].filter(post => post.id!==id)
        setPosts(removeArr)
    }

    const updatePost = (postId, newValue) => {
        if(!newValue.text ){
            return;
        }

        setPosts(prev => prev.map(item => (item.id === postId ? newValue : item)))
    }

  return (
    <div>
      <h2>Post List</h2>
      <PostForm onSubmit={addPost}/>
      <Post posts={posts} removePost={removePost}  updatePost={updatePost}/>
    </div>
  );
}

export default PostList;



