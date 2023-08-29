import React from 'react'
import classes from './CartList.module.css';

const CartList = (props) => {
  return (
      <li className={classes.list}>
          <div className={classes.details}>
              <h3 className={classes.name}>{props.name}</h3>
              <span className={classes.price}>Price:{props.price}</span>
              <span className={classes.amount}>{props.size} x{props.amount}</span>
          </div>
          
    </li>
  )
}

export default CartList