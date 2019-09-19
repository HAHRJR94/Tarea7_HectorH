import React from 'react';

const Task = (props) => {
    return (
        <div>
            <div className="task-container">
                <h3 className="task">{props.value}</h3>
              </div>
        </div>
    );
};

export default Task;