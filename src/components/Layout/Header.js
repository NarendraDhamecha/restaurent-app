import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg"
import CartIcon from "./CartIcon";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Reactmeals</h1>
        <CartIcon></CartIcon>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Delicious Food"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
