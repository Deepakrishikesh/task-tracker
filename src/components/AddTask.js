import React,{useState} from 'react'
import Button from './Button';
const AddTask = ({onAdd, isDark}) => {
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
            setText('')
            return
        }
        onAdd({text})
        setText('')
    }
    return (
        <form style={{ marginBottom:'5%'}} onSubmit={onSubmit}>
            <input 
                className={`${isDark?'dark-mode':null}`}
                type='text' 
                placeholder='Add Task'
                value={text} 
                onChange={(e) => setText(e.target.value)}/>
            <Button 
                className='btn'
                styles={style} 
                text='Add' />
        </form>
    )
}

export default AddTask
