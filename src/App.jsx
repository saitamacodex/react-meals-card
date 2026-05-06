import { useState, useEffect } from "react";
import "./App.css";
import Meal from "./Meal.jsx";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const url = "https://api.freeapi.app/api/v1/public/meals";
      try {
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        const meals_data = data.data.data;
        setMeals(meals_data);
      } catch (error) {
        console.error("Error occured white fetching the meals.");
      }
    }
    fetchMeals();
  }, []);

  return (
    <div className="app-container">
      <div className="app-headers">
        <h1>Meals Information</h1>
        <p>Find your next meals as you wish</p>
      </div>
      <div id="meal-cards">
        {meals.map((item) => {
          return <Meal data={item} key={item.idMeal} />;
        })}
      </div>
    </div>
  );
}

export default App;
