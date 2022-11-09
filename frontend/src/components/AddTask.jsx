import React, { useState } from 'react';

function AddTask(props) {
    const [showNewTaskButton, setShowNewTaskButton] = useState(true);
    const [value, setValue] = useState("");

    function handleInputChangeComplete(e) {
        setShowNewTaskButton(true);
        addNewTask(props.columnId, value);
        setValue('');

    }

    function addNewTask(columnId, content) {
        const newTaskId = 'task-' + Math.floor(Math.random() * 1000000);

        const column = props.board.columns[columnId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.push(newTaskId);

        const newTask = {
            id: newTaskId,
            content: content
        }

        props.setBoard({
            ...props.board,
            tasks: {
                ...props.board.tasks,
                [newTaskId]: newTask
            },
            columns: {
                ...props.board.columns,
                [columnId]: {
                    ...props.board.columns[columnId],
                    taskIds: newTaskIds
                }
            }
        })
    }

    return(
        <div>
        {
            showNewTaskButton ?
            <button onClick={() => setShowNewTaskButton(false)}>New</button>:
            <input type="text" value={value} onChange={e => setValue(e.target.value)} onBlur={handleInputChangeComplete} />
        }
        </div>
    )
}

export default AddTask;