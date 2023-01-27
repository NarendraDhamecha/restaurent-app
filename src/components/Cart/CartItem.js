import classes from "../Meals/MealList.module.css";
import CartItemButton from "./CartItemButton";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.amount}>{props.amount}</div>
      <div>
        <CartItemButton item={props} />
      </div>
    </li>
  );
};

export default CartItem;
