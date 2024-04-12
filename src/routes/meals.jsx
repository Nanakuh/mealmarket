import { useEffect, useState } from "react";
import MealCard from "../components/meal-card/meal-card";

function Meals() {
  const [meals, setMeals] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nanakuh.github.io/mock-api-food/mock-food-data.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMeals(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {meals ? (
        meals.map((meal, i) => (
          <MealCard
            key={i}
            title={meal.name}
            imgUrl={meal.images[0]}
            allergens={meal.allergens}
            price={meal.price}
            nutrition={meal.nutritionalInfo[1]}
            stock={meal.stock}
          />
        ))
      ) : (
        <h2>Cargando</h2>
      )}
    </div>
  );
}

export default Meals;
