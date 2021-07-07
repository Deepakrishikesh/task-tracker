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
  const LOCAL_STORAGE_TASKS='task_manager.tasks'
  const LOCAL_STORAGE_THEME='task_manager.theme'
  //To handle screen resize
  useEffect(()=>{
    const handleResize=()=>{
      setWindowSize({width:window.innerWidth})
    }
    window.addEventListener('resize',handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  //get theme preference from local storage
  useEffect(()=>{
    const theme = JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME))
    if(theme!==null)
      setDark(theme)
  },[])

  //store theme preference in local storage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_THEME,JSON.stringify(isDark))
  },[isDark])

  //get from local storage
  useEffect(()=>{
    //console.log('get task')
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS))
    if(storedTasks)
      setTasks(storedTasks)
  },[])

  //add to local storage
  useEffect(()=>{
    //console.log('store task')
    localStorage.setItem(LOCAL_STORAGE_TASKS,JSON.stringify(tasks))
  },[tasks])

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

  //clear all task
  const clearTask=()=>{
    //console.log('inside clear all')
    //const confirm = window.confirm("This will delete all your tasks")
    if(window.confirm("This will delete all your tasks"))
      setTasks([])
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
        clearAll={clearTask} 
        toggle={toggleTask} 
        tasks={tasks}/>
          
    </div>
  );
}

export default App;
