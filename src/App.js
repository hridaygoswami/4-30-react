import logo from './logo.svg';
import './App.css';
import Tasks from './MyComponents/Tasks'
import TaskList from './MyComponents/TaskList';
import { useState } from 'react';
function App() {
  const onDelete = (taskVar) => {
    console.log("Delete has been clicked", taskVar)
    // let index = taskVar.indexOf(taskVar);
    // taskVar.slice(index, 1)
    setTaskVar(taskVar.filter((tk)=> {
      return tk!==taskVar;
    }));
  };
  const[taskVar, setTaskVar] = useState([
    {
      "sno": 1,
      "title": "Get Milk",
      "desc": "Get it from the dairy"
    },
    {
      "sno": 2,
      "title": "Get Vegetables",
      "desc": "Get it from the store"
    },
    {
      "sno": 3,
      "title": "Get Cheese",
      "desc": "Get it from the dairy"
    }
  ]);
  return (
    <>
      <Tasks taskSend={taskVar} onDelete={onDelete}/>
    </>
  );
}

export default App;
