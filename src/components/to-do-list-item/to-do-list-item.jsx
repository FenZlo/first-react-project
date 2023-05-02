import React from 'react';
import Icon from '../icon/icon';
import MyButton from '../ui/button/my-button'

const ToDoListItem = function (props) {
   const chekHeandler = () => {
        props.onCheck(props.post.id);
    }

    const trashHeandler = () => {
        props.onTrash(props.post.id);
    }
    return (
        <div>
            <div className={props.crossed ? 'listItem chekedItem' : 'listItem'}>
                <div>{props.number}. {props.post.task}</div>
                <div className='mark'>
                    <MyButton type='icon' onClick={trashHeandler}> <Icon name='trash'/> </MyButton>
                    <MyButton type='icon' onClick={chekHeandler}> <Icon name='check'/> </MyButton>
                </div>
            </div>
        </div>
    );
};

export default ToDoListItem;