

import React, { useContext, useRef } from 'react'
import classes from './MedicalForm.module.css'
import ProductContext from '../../store/Product-Context';

const Medicalform = () => {
    const nameRef = useRef();
    const DescriptionRef = useRef();
    const PriceRef = useRef();
    const LargeRef = useRef();
    const MediumRef = useRef();
    const SmallRef = useRef();
    const productctx = useContext(ProductContext);
    

    const ProductHandler = (event) => {
        event.preventDefault();
        const enteredname = nameRef.current.value;
        const enteredDescription = DescriptionRef.current.value;
        const enteredPrice = PriceRef.current.value;
        const enterprice = +enteredPrice;
        const givenLarge = LargeRef.current.value;
        const givenMedium = MediumRef.current.value;
        const givenSmall = SmallRef.current.value;
        const enterLarge = +givenLarge;
        const enterSmall = +givenSmall;
        const enterMedium = +givenMedium;
            
        

        const newproduct ={
            name: enteredname,
            description: enteredDescription,
            price: enterprice,
            large:enterLarge,
            small: enterSmall,
            medium :  enterMedium
        }
        productctx.addtocard(newproduct);


        nameRef.current.value = '';
        DescriptionRef.current.value = '';
        PriceRef.current.value = '';
    }

   
  return (
      <form onSubmit={ProductHandler} className={classes.form}>
          <h3>Add Product</h3>
          <input type="text" placeholder='product Name'  ref={nameRef} required></input>
          <input type="text" placeholder='product Description' ref={DescriptionRef} required></input>
          <input type="number" placeholder='product Price' ref={PriceRef} required></input>
          <div className={classes.quantity}>
            <input type="number" placeholder='Large' ref={LargeRef} required></input>
            <input type="number" placeholder='Medium' ref={MediumRef} required></input>
            <input type="number" placeholder='Small' ref={SmallRef} required></input>
          </div>
          <button>Add Product</button>
     </form>
  )
}

export default Medicalform