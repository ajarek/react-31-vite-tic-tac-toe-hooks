import React from 'react'
import classes from './styles.module.css'

export const Result = (props) => {
  const { className, result, ...otherProps } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h3 className={classes.result}>{result}</h3>
    </div>
  )
}
export default Result
