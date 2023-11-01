import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => {
        return (
          <CartItem
            amount={item.amount}
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </ul>
  );

  const totalAmount = CartCtx.items.reduce((sum, currNum) => {
    return sum + currNum.price * currNum.amount;
  }, 0);


  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes["button--alt"]}>
          Close
        </button>
        {CartCtx.items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
