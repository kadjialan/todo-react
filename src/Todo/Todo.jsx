import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [message, setMessage] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const addItems = () => {
    const item = {
      value: message,
    };

    setTask((previous) => [...previous, item]);
    setMessage("");

    console.log(task);
  };

  const remove = (value) => {
  const arr = task.filter(item => item.value !== value)
  setTask(arr)
  }

  const reset = () => {
    window.location.reload();
  };
  return (
    <div>
      <div className="container">
        <h1>TODO LIST</h1>
        <div className="content">
          <div className="main">
            <input
              type="text"
              value={message}
              className="todo"
              placeholder="enter an event"
              onChange={handleChange}
            />
            <button className="add" type="sumit" onClick={() => addItems()}>
              ADD
            </button>
          </div>
          <div id="holder">
            {task.map(item => {
                return (
                    <div className= "text"> <input type="checkbox" className="radio"/> {item.value}  <i className="fa-solid  icons fa-trash-can" onClick={() => remove(item.value)}/> </div>
                )
            })}
          </div>
          <div className="end">
            <button className="delete" onClick={() => reset()}>
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
