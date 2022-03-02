import { Fragment } from "react";

import MealsSummary from "./MealsSummary.js";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  console.log("MEALS");
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
