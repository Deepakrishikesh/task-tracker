import { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
//import Responsive from 'react-responsive-decorator';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import dark_btn from "./components/theme-mode.png"
import './App.css';
function App() {
  //const name='Deepak'
  //const x=true
  //detect theme
  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const [tasks,setTasks] = useState([])
  const [isDark, setDark] = useState(darkTheme.matches)
  const [windowSize,setWindowSize] = useState({width:window.innerWidth})

  useEffect(()=>{
    //To handle screen resize
    const handleResize=()=>{
      setWindowSize({width:window.innerWidth})
    }
    window.addEventListener('resize',handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })
  //add task
  const addTask = (taskText) =>{
    //console.log(task)
    //console.log(tasks[tasks.length - 1].id)
    //console.log(taskText.text)
    const id = tasks.length>0 ? tasks[tasks.length - 1].id+1 : 1
    const complete = false
    const text = taskText.text;
    //console.log(id)
    const newTask = {id, text, complete}
    setTasks([...tasks,newTask])
  }

  //delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  //toggle task
  const toggleTask = (id) =>{
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, complete: !task.complete} : task
    ))
  }
 
  // change theme
  return (
    <div className={`${isDark?'dark-mode cover': null}`}>
      <Header />
      {windowSize.width>535 ? <DarkModeToggle 
        className='topright' 
        checked={isDark}
        size='70px'
        speed={2}
        onChange={()=> setDark(!isDark)} /> 
        : 
        <img src={dark_btn}
          alt='' 
          className='rightBottom'
          onClick={()=> setDark(!isDark)} />
      }
      <Tasks 
        isDark={isDark}
        onAdd={addTask}
        onDelete={deleteTask} 
        toggle={toggleTask} 
        tasks={tasks}/>
          
    </div>
  );
}

export default App;
