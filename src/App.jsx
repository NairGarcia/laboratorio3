import { useState } from 'react';
import ListaTareas from "./components/ListaTareas";
import AgregarTarea from "./components/AgregarTarea";


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false }
  ]);


  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };


  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  return (
    <div className="App">
      <h1>Task List</h1>
      <AgregarTarea addTask={addTask} />
      <ListaTareas tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}


export default App;
