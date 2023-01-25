import React, { Fragment } from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

const Cart = (props) => {
  return (
    <Modal>
      Sushi
      <div className={classes.total}>
        <span>Amount</span>
        <span>24.90</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Open</button>
      </div>
    </Modal>
  );
};

export default Cart;
