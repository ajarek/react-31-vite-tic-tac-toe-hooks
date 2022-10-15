import React, { useState } from 'react'

import classes from './styles.module.css'

export const Squares = (props) => {
  
  const { className,  ...otherProps } = props

  const [status, setStatus]=useState(true)
  const [theArray, setTheArray] = useState(new Array());
  const setSign=(e)=>{
       const i=e.target.id
    if(e.target.innerText===''){
    if(status){
      e.target.innerText='x'
     theArray[i]='x'
      
    }
    else{
      e.target.innerText='o'
      theArray[i]='o'
    }
    }
    else{return}
    setStatus(!status)
   
  }
 
  console.log(theArray);
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {[...Array(9)].map((el, i) => (
        <button
          key={i}
          id={i}
          className={classes.item}
          onClick={setSign}
        >
         
        </button>
      ))}
    </div>
  )
}
export default Squares
