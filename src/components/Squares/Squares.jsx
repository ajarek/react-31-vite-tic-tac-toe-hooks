import React, { useEffect, useState } from 'react'

import classes from './styles.module.css'

export const Squares = (props) => {
  const { className, ...otherProps } = props

  const [status, setStatus] = useState(true)
  const [theArray, setTheArray] = useState([...Array(9)])
  const [result,setResult]=useState('')
  const setSign = (e) => {
    const i = e.target.id
    if (e.target.innerText === '') {
      if (status) {
        theArray[i] = 'x'
      } else {
        theArray[i] = 'o'
      }
    } else {
      return
    }
    setStatus(!status)
  }

  useEffect(() => {
    const clearTheArray = () => {
      setTimeout(() => {
      setTheArray([...Array(9)])
      setResult('')
    }, 1000)
    }
    theArray.map((el, index, arr) => {
      
      if (
        (arr[0] === 'x' && arr[1] === 'x' && arr[2] === 'x') ||
        (arr[0] === 'o' && arr[1] === 'o' && arr[2] === 'o')
      ) {
        setResult('win ' + arr[0])
        
          clearTheArray()
       
      } else if (
        (arr[3] === 'x' && arr[4] === 'x' && arr[5] === 'x') ||
        (arr[3] === 'o' && arr[4] === 'o' && arr[5] === 'o')
      ) {
        setResult('win ' + arr[3])
        clearTheArray()
      } else if (
        (arr[6] === 'x' && arr[7] === 'x' && arr[8] === 'x') ||
        (arr[6] === 'o' && arr[7] === 'o' && arr[8] === 'o')
      ) {
        setResult('win ' + arr[6])
        clearTheArray()
      } else if (
        (arr[0] === 'x' && arr[3] === 'x' && arr[6] === 'x') ||
        (arr[0] === 'o' && arr[3] === 'o' && arr[6] === 'o')
      ) {
        setResult('win ' + arr[0])
        clearTheArray()
      } else if (
        (arr[1] === 'x' && arr[4] === 'x' && arr[7] === 'x') ||
        (arr[1] === 'o' && arr[4] === 'o' && arr[7] === 'o')
      ) {
        setResult('win ' + arr[1])
        clearTheArray()
      } else if (
        (arr[2] === 'x' && arr[5] === 'x' && arr[8] === 'x') ||
        (arr[2] === 'o' && arr[5] === 'o' && arr[8] === 'o')
      ) {
        setResult('win ' + arr[2])
        clearTheArray()
      } else if (
        (arr[0] === 'x' && arr[4] === 'x' && arr[8] === 'x') ||
        (arr[0] === 'o' && arr[4] === 'o' && arr[8] === 'o')
      ) {
        setResult('win ' + arr[0])
        clearTheArray()
      } else if (
        (arr[2] === 'x' && arr[4] === 'x' && arr[6] === 'x') ||
        (arr[2] === 'o' && arr[4] === 'o' && arr[6] === 'o')
      ) {
        setResult('win ' + arr[2])
        clearTheArray()
      }else if(
        arr.includes(undefined)===false
        ){
          setResult('draw')
          clearTheArray()
        }
    })
  })

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {theArray.map((el, i, arr) => (
        <button
          key={i}
          id={i}
          className={classes.item}
          onClick={setSign}
        >
          {arr[i]}
        </button>
      ))}
      <h3>{result}</h3>
    </div>
  )
}
export default Squares
