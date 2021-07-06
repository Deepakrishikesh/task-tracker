import { FaTimes } from 'react-icons/fa';
//import Button from './Button';
import AddTask from './AddTask';
const Tasks = ({tasks, onDelete, onAdd, toggle,isDark}) => {
    /*const style ={
        position: 'absolute',
        top:'2px',
        right:'0',
        backgroundColor: 'black',
        fontSize: '80%'
    }*/
    return (
        <div className="tasks">
            <AddTask isDark={isDark} onAdd={onAdd}/>
                {tasks.length>0 ?
                    tasks.map((task)=>(
                        <div key={task.id} className='center'>
                            <h3 
                                className={`${task.complete ? 'strike' : null}`} 
                                onDoubleClick={()=>toggle(task.id)}>
                                    {task.text}
                            </h3> 
                            <FaTimes 
                                        className='delbtn'
                                        onClick={()=>onDelete(task.id)} 
                            />
                        </div>
            ))
            :
                       <div className='center'> <p style={{display:'flex', justifyContent:'center'}}>No Tasks</p> </div>

            }   
        </div>
    )
}

export default Tasks
