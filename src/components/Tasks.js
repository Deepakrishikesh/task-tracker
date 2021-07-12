// import { useState } from 'react';
//import { isMobile } from 'react-device-detect';
import { FaTimes } from 'react-icons/fa';
//import { useDoubleTap } from 'use-double-tap';
import Button from './Button';
import AddTask from './AddTask';
import React from 'react';
const Tasks = ({tasks, onDelete, onAdd, clearAll, toggle,isDark}) => {
    const style ={
        position:'absolute',
        bottom:'10px',
        right:'10px',
        backgroundColor: 'rgb(230,25,0)',
        borderRadius: '20px',
        padding: '15px'
    }
    // const [currentTask,setCurrentTask]=useState({})
    // const doubleTap = useDoubleTap(() => {
    //     //toggle(this.id);
    //     alert('This operation is not yet complete. Stay tuned.')
    //   } , 300)
    return (
        <div className="tasks">
            <AddTask isDark={isDark} onAdd={onAdd}/>
                {tasks.length>0 ?
                    <div>
                    {tasks.map((task)=>(
                        <div key={task.id} 
                            className='center' 
                            onDoubleClick={()=>toggle(task.id)}
                            >
                            <h3 
                                className={`${task.complete ? 'strike' : null}`} >
                                    {task.text}
                            </h3> 
                            <FaTimes 
                                        className='delbtn'
                                        onClick={()=>onDelete(task.id)} 
                            />
                        </div>
            ))}
            </div>
            :
                       <div style={{marginTop:'30px'}}> <p style={{display:'flex', justifyContent:'center'}}>No Tasks</p> </div>

            }
            <div style={{marginBottom:'70px'}} />
            { tasks.length>0 ? <Button onClick={clearAll} text='Clear All' className='delbtn' styles={style} /> :null}
        </div>
    )
}

export default Tasks