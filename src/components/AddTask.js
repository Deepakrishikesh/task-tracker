import React,{useState} from 'react'
import Button from './Button';
const AddTask = ({onAdd}) => {
    const style ={
        position: 'relative',
        //top:'0',
        //right:'0',
        backgroundColor: 'black',
        fontSize: 'medium'
    }
    const [text, setText] = useState('')

    const onSubmit = (e) =>{
        //console.log(e.value);
        e.preventDefault()
        if(!text || !text.replace(/\s/g, '').length){
            alert('Please add task')
            return
        }
        onAdd({text})
        setText('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type='text' 
                placeholder='Add Task'
                value={text} 
                onChange={(e) => setText(e.target.value)}/>
            <Button 
                styles={style} 
                text='Add' />
        </form>
    )
}

export default AddTask
