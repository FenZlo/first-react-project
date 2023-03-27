import React, { useState } from 'react';
import TasksToDoList from '../tasks-to-do-list/tasks-to-do-list.jsx';
import PostForm from '../post-form/post-form.jsx';


const ToDoList = function () {
  const [posts, setPosts] = useState(['']);

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }
  
  return (
        <div className='toDoList'>
          <div className='header'>
            <strong>TO-DO LIST</strong>
          </div>
          <PostForm create={createPost}/>
          <TasksToDoList posts={posts}/>
      </div>
    )
}

export default ToDoList;