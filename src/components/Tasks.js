import { FaTimes } from 'react-icons/fa';
//import Button from './Button';
import AddTask from './AddTask';
const Tasks = ({tasks, onDelete, onAdd, toggle}) => {
    /*const style ={
        position: 'absolute',
        top:'2px',
        right:'0',
        backgroundColor: 'black',
        fontSize: '80%'
    }*/
    return (
        <div className="tasks">
            <AddTask onAdd={onAdd}/>
            {tasks.length>0 ?
                tasks.map((task)=>(
                    <h3 
                        className={`${task.complete ? 'strike' : null}`}
                        key={task.id} 
                        onDoubleClick={()=>toggle(task.id)}>
                            {task.text}
                            <FaTimes 
                                style={{color:'red',position:'absolute',top:'0', fontSize:'large', cursor: 'pointer'}} 
                                onClick={()=>onDelete(task.id)} 
                            />
                    </h3>  
          ))
        :
                    <p style={{marginLeft: '10%'}}>No Tasks</p>
        }  
        </div>
    )
}

export default Tasks
