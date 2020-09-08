import React, { useState } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';

function App() {

  const [taskList, setTaskList] = useState([]);

  const remove_task = (id) => {
    const newList = taskList.filter( item => item.id !== id)
    setTaskList(newList);
  }

  const setIsCompleted = (id, isCompleted) => {
    const newList = taskList.map( (item) => {
      if (item.id === id) {
        item.completed = isCompleted;
      }
      return item;
    });
    setTaskList(newList);
  }
  const setTaskText = (id, text) => {
    const newList = taskList.map( (item) => {
      if (item.id === id) {
        item.task_text = text;
      }
      return item;
    });
    setTaskList(newList);
  }
  const [currentId, setCurrentId] = useState(1);
  function add_task (){
    setCurrentId(currentId+1);
    const newTask = { task_text : "<new task>", completed: false, id: currentId}
    console.log("Added new task id "+newTask.id);
    setTaskList([...taskList, newTask ]);
  }
  return (
    <div className="App">
      { 
        taskList.map( (item, index) => 
          <ToDoItem 
            key={item.id} 
            id={item.id} 
            task_text={item.task_text}
            setTaskText={setTaskText}
            completed={item.completed} 
            setIsCompleted={setIsCompleted}
            remove_task={remove_task}
            />
        )
      }
      <button onClick={add_task}>Add Task</button>
    </div>
  );
}

export default App;
