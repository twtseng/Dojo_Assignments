import React from 'react'

const ToDoItem = props => {
    return (
        <div>
            <input type="text" 
                style={ props.completed ? {textDecoration:"line-through"} : {}} 
                value={props.task_text} 
                onChange={ e => props.setTaskText(props.id, e.target.value) }
                onClick={ e => e.target.select() }
            />
            <input type="checkbox" checked={props.completed} onChange={ e => props.setIsCompleted(props.id, e.target.checked) } />
            <button onClick={() => props.remove_task(props.id)}>Remove</button>
        </div>
    )
}

export default ToDoItem
