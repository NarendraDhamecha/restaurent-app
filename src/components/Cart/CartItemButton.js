import classes from "./CartItemButton.module.css";
import CartContext from "../Store/Cart-context";
import { useContext } from "react";

const CartItemButton = (props) => {
  const CartCtx = useContext(CartContext);

  const onAddItem = (e) => {
    e.preventDefault();

    CartCtx.addItem({ ...props.item, amount: "1" });
  };

  const onRemoveItem = (e) => {
    e.preventDefault();

    CartCtx.removeItem(props.item.id)
  };

  return (
    <div className={classes.actions}>
      <button onClick={onRemoveItem} className={classes["button--alt"]}>
        -
      </button>
      <button onClick={onAddItem} className={classes.button}>
        +
      </button>
    </div>
  );
};

export default CartItemButton;
