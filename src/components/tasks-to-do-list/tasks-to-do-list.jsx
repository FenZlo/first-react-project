import React from "react";
import ListItem from '../to-do-list-items/to-do-list-items.jsx';

const TasksToDoList = ({posts}) => {
    return (
        <div className='items'>
          {posts.map((post, index) => 
            <ListItem number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    )
}

export default TasksToDoList;