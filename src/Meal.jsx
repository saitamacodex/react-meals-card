import React from "react";
import "./App.css";

function Meal(props) {
  const meals = props.data;
  return (
    <section>
      <article className="meal-card">
        <div id="meal-thumbnail">
          <figure>
            <img src={meals.strMealThumb} alt="meals pic" />
          </figure>
        </div>
        <div id="meal-info">
          <h3>{meals.strMeal}</h3>
          <hr />
          <p>Meal type: {meals.strCategory + ", " + meals.strArea} </p>
          <p>{meals.strInstructions}</p>
          <p>{meals.strTags}</p>
        </div>
      </article>
    </section>
  );
}

export default Meal;
