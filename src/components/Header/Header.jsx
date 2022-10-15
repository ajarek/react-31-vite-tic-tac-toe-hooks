import React from 'react'

import classes from './styles.module.css'

export const Header = (props) => {
  const {
    className,
    player,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h1>TIC TAC TOE</h1>
      <h2>{player} -TURN</h2>

    </div>
  )
}
export default Header
