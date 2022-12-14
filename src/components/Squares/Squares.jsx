import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App'
import classes from './styles.module.css'

export const Squares = (props) => {
  const { className, ...otherProps } = props
  const { status, setStatus, setResult } = useContext(AppContext)
  const [theArray, setTheArray] = useState([...Array(9)])

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
        setResult(arr[0] + ' won')

        clearTheArray()
      } else if (
        (arr[3] === 'x' && arr[4] === 'x' && arr[5] === 'x') ||
        (arr[3] === 'o' && arr[4] === 'o' && arr[5] === 'o')
      ) {
        setResult(arr[3] + ' won')
        clearTheArray()
      } else if (
        (arr[6] === 'x' && arr[7] === 'x' && arr[8] === 'x') ||
        (arr[6] === 'o' && arr[7] === 'o' && arr[8] === 'o')
      ) {
        setResult(arr[6] + ' won')
        clearTheArray()
      } else if (
        (arr[0] === 'x' && arr[3] === 'x' && arr[6] === 'x') ||
        (arr[0] === 'o' && arr[3] === 'o' && arr[6] === 'o')
      ) {
        setResult(arr[0] + ' won')
        clearTheArray()
      } else if (
        (arr[1] === 'x' && arr[4] === 'x' && arr[7] === 'x') ||
        (arr[1] === 'o' && arr[4] === 'o' && arr[7] === 'o')
      ) {
        setResult(arr[1] + ' won')
        clearTheArray()
      } else if (
        (arr[2] === 'x' && arr[5] === 'x' && arr[8] === 'x') ||
        (arr[2] === 'o' && arr[5] === 'o' && arr[8] === 'o')
      ) {
        setResult(arr[2] + ' won')
        clearTheArray()
      } else if (
        (arr[0] === 'x' && arr[4] === 'x' && arr[8] === 'x') ||
        (arr[0] === 'o' && arr[4] === 'o' && arr[8] === 'o')
      ) {
        setResult(arr[0] + ' won')
        clearTheArray()
      } else if (
        (arr[2] === 'x' && arr[4] === 'x' && arr[6] === 'x') ||
        (arr[2] === 'o' && arr[4] === 'o' && arr[6] === 'o')
      ) {
        setResult(arr[2] + ' won')
        clearTheArray()
      } else if (arr.includes(undefined) === false) {
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
    </div>
  )
}
export default Squares
