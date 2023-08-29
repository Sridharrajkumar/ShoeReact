

import React, { useReducer } from 'react'
import CartContext from './Cart-Context'

const initialState = {
  products: [],
  totalAmount:0,
}

const Reducer = (state, action) => {
  
  if (action.type === 'ADD')
  {

    const updateTotalPrice = state.totalAmount + action.product.price * action.product.quantity;

    const exisitingCartpro = state.products.findIndex((product) => product.name === action.product.name && product.size === action.product.size);
     
    const existingProduct = state.products[exisitingCartpro];

    let updatedproducts;

    if (existingProduct)
    {
      const upadteproduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };

      updatedproducts = [...state.products];
      updatedproducts[exisitingCartpro] = upadteproduct;

    }
    else {
      updatedproducts = state.products.concat(action.product);
    }


    
    return {
          products: updatedproducts,
          totalAmount:updateTotalPrice
    }
    
  }
  
  return initialState
  
}

const CartProvider = (props) => {

  const [state, dispatch] = useReducer(Reducer, initialState)
  
  const AddProductToCart = (product) => {
    dispatch({type:'ADD' , product:product})
  }

  const RemoveProductToCart = (product) => {
    dispatch({type:'REMOVE' , product:product})
  }

  const cartContext = {
    products: state.products,
    totalAmount: state.totalAmount,
    addProduct: AddProductToCart,
    removeProduct: RemoveProductToCart
  }

  return (
    <CartContext.Provider value={cartContext}>
       {props.children}
     </CartContext.Provider>
  )
}

export default CartProvider


