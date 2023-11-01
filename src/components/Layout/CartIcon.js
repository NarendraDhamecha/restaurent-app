import React, { useContext } from "react";
import classes from "./CartIcon.module.css";
import CartContext from "../Store/Cart-context";

const CartIcon = (props) => {
  const Cartctx = useContext(CartContext);

  const numOfCartItems = Cartctx.items.reduce((currNum, item) => {
    return currNum + Number(item.amount);
  }, 0);

  return (
    <button onClick={props.onCartClick} className={classes.button}>
      <span className={classes.icon}></span>
      <span>Your cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default CartIcon;
