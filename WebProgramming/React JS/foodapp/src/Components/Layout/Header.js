import React, { Fragment } from 'react'
import meals from './meals.jpg';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
import MealsSummary from '../Meals/MealsSummary';

const Header = (props) => {
  return (
    <div>
      <Fragment>
        <header className={classes.header}>
        <h1>Digital Meals</h1>
        <HeaderCart />
        </header>
        <img src={meals} alt='A table full of delicious food' className={classes.img}></img>
        <footer>
          
        </footer>
      </Fragment>
    </div>
  )
}

export default Header
