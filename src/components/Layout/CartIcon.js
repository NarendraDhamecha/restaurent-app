import React from "react";
import classes from "./CartIcon.module.css";

const CartIcon = (props) => {
  return (
    <button onClick={props.onCartClick} className={classes.button}>
      <span className={classes.icon}></span>
      <span>Your cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default CartIcon;
