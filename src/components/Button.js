import React from 'react'

const Button = ({styles,text}) => {
    /*const onClick= () => {
        alert(text,'clicked');
    }*/
    return (
        <>
            <button 
                style={styles} 
                className='btn'> {text} 
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
