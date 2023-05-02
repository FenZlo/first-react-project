import React, { useState } from 'react';
import MyButton from '../ui/button/my-button.jsx'
import MyInput from '../ui/input/my-input.jsx';

const PostForm = function ({ create, deleteAll }) {
  const [inputValue, setInputValue] = useState('');


  function addNewPost() {
    if (inputValue === '') return;

    const newPost = {
      task: inputValue, id: Date.now()
    }
    create(newPost);
    setInputValue('');
  }

  function deleteAllPosts() {
    deleteAll();
    setInputValue('');
  };

  return (
    <div className='postForm'>
      <div className='textToAdd'>
        <MyInput
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
          type='text'
          placeholder="what you want to do"
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