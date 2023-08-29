import React, { useContext, useRef } from 'react'
import classes from './ProductList.module.css'
import CartContext from '../../store/Cart-Context';
const ProductList = ({ name, description, price,small,large,medium }) => {

    const cartctx = useContext(CartContext);

    
     
    const submitHandler = (e , size) => {
        e.preventDefault();
        cartctx.addProduct({
            name: name,
            price: Number(price),
            size: size,
            quantity: 1,
        });
        
    }
  return (
      <li className={classes.list}>
          <div className={classes.product}> 
              <h3 className={classes.name}>{name}</h3>
              <div className={classes.description}>{description}</div>
              <div className={classes.price}>&#8377;{price}</div>
          </div>
          <form className={classes.form} >
            <button className={classes.navbtn} onClick={(e) =>{submitHandler(e , 'large')}}>
                <span>Large</span>
                <span className={classes.amount}>{large}</span>
              </button>
              <button className={classes.navbtn} onClick={(e) =>{submitHandler(e ,' medium')}}>
                <span>Medium</span>
                <span className={classes.amount}>{medium}</span>
              </button>
              <button className={classes.navbtn} onClick={(e) =>{submitHandler(e , 'small')}}>
                <span>Small</span>
                <span className={classes.amount}>{small}</span>
              </button>
          </form>
          
     </li>
  )
}

export default ProductList