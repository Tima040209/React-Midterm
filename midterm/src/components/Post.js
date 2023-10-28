import React,{useState} from 'react';
import PostForm from './PostForm';
function Post({posts,removePost,updatePost}) {
    const [edit,setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updatePost(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }
    if(edit.id){
        return <PostForm edit={edit} onSubmit={submitUpdate}/>
    }
  return posts.map((post) => ( 
        <div>
            {post.text}
        <div >
            <button onClick={() => removePost(post.id)}
            >delete</button>
            <button onClick={() => setEdit({id : post.id, value : post.text})}
           >
                update
            </button>
           
        </div>
        </div>
        
  ))
}

export default Post