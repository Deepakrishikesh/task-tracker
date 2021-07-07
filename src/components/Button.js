import React from 'react'

const Button = ({styles,text,onClick}) => {
    /*const onClick= () => {
        alert(text,'clicked');
    }*/
    return (
        <>
            <button 
                style={styles} 
                className='btn'
                onClick={onClick}> {text} 
            </button>
        </>
    )
}
Button.defaultProps={
    styles:{
        backgroundColor: 'black',
        fontSize: '80%'
    },
    text: 'Button'
    
}
export default Button
