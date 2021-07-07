import { FaTimes } from 'react-icons/fa';
import Button from './Button';
import AddTask from './AddTask';
const Tasks = ({tasks, onDelete, onAdd, clearAll, toggle,isDark}) => {
    const style ={
        position:'absolute',
        bottom:'10px',
        right:'10px',
        backgroundColor: 'red',
        borderRadius: '20px',
        padding: '15px'
    }
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
            { tasks.length>0 ? <Button onClick={clearAll} text='Clear All' styles={style} />:null}
        </div>
    )
}

export default Tasks
