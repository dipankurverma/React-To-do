
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';
import { useState } from 'react';
function App() {
  const [Tasks, setTasks]= useState({initialState:[]});
  return (
    <main>
      <TaskForm />
      <Task />
      

    </main>
  );
}

export default App;
