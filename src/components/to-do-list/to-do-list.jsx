import React, { useState } from 'react';
import PostForm from '../post-form/post-form.jsx';
import ToDoListItem from '../to-do-list-item/to-do-list-item.jsx';


const ToDoList = function () {
const [posts, setPosts] = useState(
  localStorage.getItem("keys").length !== 0 ? JSON.parse(localStorage.getItem("keys")) : []
  );

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
 setPosts(posts.map(post => post.id === id ? {...post, checked: !post.checked} : post));
}

const itemDeleteHandler = (id) => {
  /*Из массива posts найти элемент по id и удалить. Через фильтр вернуть массив без этого объекта     
  */
  setPosts(posts.filter(post => post.id !== id));
}

if (localStorage.getItem("keys").length !== 0){
  localStorage.setItem("keys", JSON.stringify(posts));
}

return (
  <div className='toDoList'>
    <div className='header'>
      <strong>TO-DO LIST</strong>
    </div>
    <PostForm
    onCreate={createPost} onDeleteAll={deleteAllPosts}/>
    <div className='items'>
          {posts.map((post, index) =>
              <ToDoListItem 
              number={index + 1}
              post={post}
              key={post.id}
              onCheck={itemCheckHandler}
              crossed={post.checked}
              onTrash={itemDeleteHandler}
              />
          )}
      </div>
  </div>
)
}

export default ToDoList;