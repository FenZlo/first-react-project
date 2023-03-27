import React, { useState } from 'react';
import MyButton from '../ui/button/my-button.jsx'
import MyInput from '../ui/input/my-input.jsx';

const PostForm = function ({create}) {
    const [post, setPost] = useState ({task: ''});
    

    function addNewPost() {
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({task: ''});
      }

      function deleteAllPosts() {
        setPost(null)
      }

    return (
        <div className='postForm'>
            <div className='textToAdd'>
              <MyInput 
              value = {post.task}
              onChange = {e => setPost({...post, task: e.target.value})}
              type='text' 
              placeholder = "what you want to do"
              />
            </div>
            <div className='buttonsContainer'>
              <MyButton onClick={addNewPost} id="buttonAdd">ADD</MyButton>
              <MyButton onClick={deleteAllPosts} id="buttonClear">Clear all</MyButton>
            </div>
          </div>
    )
}

export default PostForm;