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
          <span className="title-line"></span>
          <p>
            <strong>Meal type:</strong>{" "}
            {meals.strCategory + ", " + meals.strArea}{" "}
          </p>
          <p>
            <strong>Instructions:</strong> {meals.strInstructions}
          </p>
          {meals.strTags && (
            <p>
              <strong>Tags:</strong> {meals.strTags}
            </p>
          )}
        </div>
      </article>
    </section>
  );
}

export default Meal;
