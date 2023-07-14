import React from 'react'
import classes from'./AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealsItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Rice',
      description: 'Fried-Rice, Jira Rice',
      price: 120.00,
    },
    {
      id: 'm2',
      name: 'Biriyani',
      description: 'Chicken / Mutton ',
      price: 200.00,
    },
    {
      id: 'm3',
      name: 'Chicken',
      description: 'Chili-Chicken',
      price: 150.00,
    },
    {
      id: 'm4',
      name: 'Drinks',
      description: 'Pepsi,7up,Cold Drinks',
      price: 18.00,
    },
  ];

  const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  return (
    <div>
      <section className={classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
      </section>
    </div>
  )
}

export default AvailableMeals
