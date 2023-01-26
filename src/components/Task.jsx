import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Task({ logIn }) {
  const [task, setTask] = useState(null);
  const [isDone, setIsDone] = useState(false)



  useEffect(() => {
    if (isDone && logIn) fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [isDone]);


  return (
    <div>
      <Link to="/new_project_24/home">Go to Home</Link>
      <button className='btn btn-primary' onClick={() => {
        if(logIn) setIsDone(true);
      }} >Complete Task</button>
      {task && 
        <div> 
            <h2>Task {task.id}</h2> 
            <h3>{task.title}</h3> 
        </div>}
      <p>Completed: {isDone === true ? "Yes" : "No"}</p>
    </div>
  );
}

export default Task;