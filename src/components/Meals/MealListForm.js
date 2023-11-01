import React, { useContext } from "react";
import classes from "./MealListForm.module.css";
import Input from "../UI/Input";
import CartContext from "../Store/Cart-context";

const MealListForm = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (e) => {
    e.preventDefault();
    const amount = document.getElementById("Amount" + props.id).value
    cartCtx.addItem({ ...props.item, amount: amount });
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "Amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemHandler}>+ Add</button>
    </form>
  );
};

export default MealListForm;
