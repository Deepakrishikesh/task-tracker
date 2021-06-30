import React from 'react';
//import Button from './Button';
 const Header = ({title}) => {
     return (
         <>
         <header>
            <h1>{title}</h1>
         </header>
         </>
     )
 }
 Header.defaultProps={
     title:'Task Tracker'
 }
 export default Header
