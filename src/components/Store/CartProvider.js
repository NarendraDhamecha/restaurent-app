import { useState } from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemHandler = (item) => {
    updateItems((prevItems) => {
      const existingIndex = prevItems.findIndex((prevItem) => {
        return prevItem.id === item.id;
      });

      let existingItem = prevItems[existingIndex];

      if (existingItem) {
        let updatedItems = [...prevItems];
        updatedItems[existingIndex].amount =
          Number(updatedItems[existingIndex].amount) + Number(item.amount);
        return [...updatedItems];
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeItemHandler = (id) => {
    updateItems((prevItems) => {
      const existingIndex = prevItems.findIndex((prevItem) => {
        return prevItem.id === id;
      });

      let existingItem = prevItems[existingIndex];

      if (existingItem.amount > 1) {
        let updatedItems = [...prevItems];
        updatedItems[existingIndex].amount =
          Number(updatedItems[existingIndex].amount) - Number("1");
        return [...updatedItems];
      } else {
        let updatedItems = prevItems.filter((item) => {
          return item.id !== id;
        });
        return [...updatedItems];
      }
    });
  };

  const cartContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
