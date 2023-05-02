import React, { useState } from 'react';
import PostForm from '../post-form/post-form.jsx';
import ToDoListItem from '../to-do-list-item/to-do-list-item.jsx';


const ToDoList = function () {
const [posts, setPosts] = useState([]);
console.log(posts)

const createPost = (newPost) => {
  setPosts([...posts, newPost]);
}

const deleteAllPosts = () => {
  setPosts([]);
}

const itemCheckHandler = (id) => {
  /*Из массива posts найти элемент по id, в этом элементе изменяем поле Checked, котороя я должен создать.
    оно у меня будет true или false. Надо накинуть класс, который будет перечеркивать текст.
  */
  const element = posts.find(el => el.id === id); 
  if (element.hasOwnProperty('cheсked')) {
    element.checked = false;
  }
  element.checked = !element.checked;  
  setPosts(posts);
}

const itemDeleteHandler = (id) => {
  /*Из массива posts найти элемент по id и удалить. Через фильтр вернуть массив без этого объекта     
  */
}

return (
  <div className='toDoList'>
    <div className='header'>
      <strong>TO-DO LIST</strong>
    </div>
    <PostForm
    create={createPost} deleteAll={deleteAllPosts}/>
    <div className='items'>
          {posts.map((post, index) =>
              <ToDoListItem 
              number={index + 1}
              post={post}
              key={post.id}
              onCheck={itemCheckHandler}
              crossed={post.checked}
              onDelete={itemDeleteHandler}
              />
          )}
      </div>
  </div>
)
}

export default ToDoList;