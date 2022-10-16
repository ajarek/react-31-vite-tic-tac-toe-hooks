import React, { useEffect, useState } from 'react'

import classes from './styles.module.css'

export const Squares = (props) => {
  const { className, ...otherProps } = props

  const [status, setStatus] = useState(true)
  const [theArray, setTheArray] = useState(new Array())
  const setSign = (e) => {
    const i = e.target.id
    if (e.target.innerText === '') {
      if (status) {
        e.target.innerText = 'x'
        theArray[i] = 'x'
      } else {
        e.target.innerText = 'o'
        theArray[i] = 'o'
      }
    } else {
      return
    }
    setStatus(!status)
  }
useEffect(()=>{
  theArray.map((el, index, arr) => {
    if (
      (arr[0] === 'x' && arr[1] === 'x' && arr[2] === 'x') ||
      (arr[0] === 'o' && arr[1] === 'o' && arr[2] === 'o')
    ) {
      console.log('win ' + arr[0])
    } else if (
      (arr[3] === 'x' && arr[4] === 'x' && arr[5] === 'x') ||
      (arr[3] === 'o' && arr[4] === 'o' && arr[5] === 'o')
    ) {
      console.log('win ' + arr[3])
    } else if (
      (arr[6] === 'x' && arr[7] === 'x' && arr[8] === 'x') ||
      (arr[6] === 'o' && arr[7] === 'o' && arr[8] === 'o')
    ) {
      console.log('win ' + arr[6])
    } else if (
      (arr[0] === 'x' && arr[3] === 'x' && arr[6] === 'x') ||
      (arr[0] === 'o' && arr[3] === 'o' && arr[6] === 'o')
    ) {
      console.log('win ' + arr[0])
    } else if (
      (arr[1] === 'x' && arr[4] === 'x' && arr[7] === 'x') ||
      (arr[1] === 'o' && arr[4] === 'o' && arr[7] === 'o')
    ) {
      console.log('win ' + arr[1])
    } else if (
      (arr[2] === 'x' && arr[5] === 'x' && arr[8] === 'x') ||
      (arr[2] === 'o' && arr[5] === 'o' && arr[8] === 'o')
    ) {
      console.log('win ' + arr[2])
    } else if (
      (arr[0] === 'x' && arr[4] === 'x' && arr[8] === 'x') ||
      (arr[0] === 'o' && arr[4] === 'o' && arr[8] === 'o')
    ) {
      console.log('win ' + arr[0])
    } else if (
      (arr[2] === 'x' && arr[4] === 'x' && arr[6] === 'x') ||
      (arr[2] === 'o' && arr[4] === 'o' && arr[6] === 'o')
    ) {
      console.log('win ' + arr[2])
    }
  })
})

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
        ></button>
      ))}
    </div>
  )
}
export default Squares
