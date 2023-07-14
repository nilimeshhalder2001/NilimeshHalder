import React from 'react'
import classes from './Cart.module.css';

const Card = (props) => {
  return (
    <div className="card1">
    <div className={classes.card}>{props.children}</div>
    </div>
  )
}

export default Card
