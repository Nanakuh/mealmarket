import { useEffect, useState } from "react";
import { mockMeals } from "../mockdata/mockmeals";
import MealCard from "../components/meal-card/meal-card";

function Meals() {
  const [meals, setMeals] = useState();

  useEffect(() => {
    const data = mockMeals;
    setMeals(data);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {meals ? (
        meals.map((meal, i) => (
          <MealCard
            key={i}
            title={meal.title}
            imgUrl={meal.imageUrl}
            weight={meal.weight}
            allergens={meal.allergens}
            price={meal.price}
            calories={meal.calories}
            nutrition={meal.nutrition}
            soldOut={meal.soldOut}
          />
        ))
      ) : (
        <h2>Cargando</h2>
      )}
    </div>
  );
}

export default Meals;
