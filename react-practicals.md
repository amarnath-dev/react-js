- React TODO App Code

Basic Imports
```js
import './App.css';
import { useState } from 'react'
import { Task } from './Components/taskComponent';

```

Body Code
```js
function App() {
  let [inputValue, setInputValue] = useState("");
  let [inputStore, setInputStore] = useState([]);

  const getValue = (event) => {
    setInputValue(event.target.value);
  }

  const addTask = () => {
    if (inputValue === "") {
      alert("Type Something");
      return;
    };

    let task = {
      taskId: inputStore.length === 0 ? 1 : inputStore.length + 1,
      taskName: inputValue,
      completed: false,
    }
    setInputStore([...inputStore, task]);
  }

  const deleteTask = (taskId) => {
    setInputStore(inputStore.filter((task) => {
      if (task.taskId === taskId) {
        return false;
      } else {
        return true;
      }
    }));
  }

  const changeStatus = (taskId) => {
    setInputStore(inputStore.map((task) => {

      if (task.taskId === taskId) {
        return { ...task, completed: true };
      } else {
        return task;
      }

    }));
  }

  return (
    <div className="App" >
      
      <div>
        <input onChange={getValue}></input>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div>

        {inputStore.map((task) => {
          return <Task taskName={task.taskName} taskId={task.taskId} changeStatus={changeStatus} completed={task.completed} deleteTask={deleteTask} />
        })}

      </div>
    </div>
  );
}

export default App;
```

Item Listing Component

```js
export const Task = (props) => {

    return <div>
        <h1 style={{ color: props.completed ? "green" : "red" }}>{props.taskName}</h1>
        <button onClick={() => props.deleteTask(props.taskId)}> X </button>
        <button onClick={() => props.changeStatus(props.taskId)}>Complete</button>
    </div>

}

```

- React API Call(Usign useEffect)

Basic Exports
```js
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

```
Main Code Goes Here 
```js
function App() {
  let [currFact, setCurrFact] = useState("");

  useEffect(() => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/").then((res) => {
      const excuse = res.data[0]?.excuse || "No excuse are there";
      setCurrFact(excuse)
    });
  }, []);

  const getNewExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/").then((res) => {
      const excuse = res.data[0]?.excuse || "No Excuse are there";
      setCurrFact(excuse)
    })
  }

  return (
    <div className="App" >
      <div>
        <button onClick={getNewExcuse}>Generate Execuss</button>
        <p>{currFact}</p>
      </div>
    </div>
  );
  
}

export default App;

```
- Axios - It is a popular library that is used to sent API requests to the HTTP end Points in React.

```js
npm install axios
```