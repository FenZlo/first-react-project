import React from 'react';
import Icons from '../icons/icons';

const ToDoListItems = function (props) {
    return (
        <div>
            <div className="listItem">
                <div className="listItemContent">{props.number}. {props.post.task}</div>
                <div className="mark">
                    <Icons/>
                </div>
            </div>
        </div>
    );
};

export default ToDoListItems;