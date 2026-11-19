
import React from 'react';

function TodoItem({ task, toggleTask, deleteTask }) {

    return (
        <div className="todo-item">

            <span
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none'
                }}
            >
                {task.text}
            </span>

            <div>
                <button onClick={() => toggleTask(task.id)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>

                <button onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
            </div>

        </div>
    );
}

export default TodoItem;
