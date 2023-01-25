import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import CartIcon from "./CartIcon";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Reactmeals</h1>
        <CartIcon onCartClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delicious Food" />
      </div>
    </Fragment>
  );
};

export default Header;
