import { useEffect, useState } from "react";
import MealCard from "../components/meal-card/meal-card";
import { Badge } from "flowbite-react";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [mealsFiltered, setMealsFiltered] = useState();

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
        setMealsFiltered(data);
        const categories = data.map((meal) => meal.foodGroup);

        const filteredCategories = ["All", ...new Set(categories)]; // Crea un array nuevo sin duplicados
        setCategories(filteredCategories);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedFilter !== "All") {
      const mealsFilteredByFoodGroup = meals.filter(
        (meal) => meal.foodGroup === selectedFilter
      );
      setMealsFiltered(mealsFilteredByFoodGroup);
    }else{
      setMealsFiltered (meals)
    }
  }, [selectedFilter]);

  return (
    <div>
      <section className="p-4">
        <div className="justify-center flex space-x-4 mb-4">
          {categories &&
            categories.map((category) => (
              <Badge
                key={category}
                color={selectedFilter === category ? "warning" : "success"}
                onClick={() => setSelectedFilter(category)}
                className={`cursor-pointer px-4 py-2 rounded-full capitalize `}
              >
                {category}
              </Badge>
            ))}
        </div>

        {/* <div className="justify-center bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">
            Meals <span className="text-gray-500">{meals && meals.length}</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Choose from our weekly variety of dishes. We change the menu every
            Monday, so if you like something, order it before the end of
            Sunday.
          </p>
        </div> */}
      </section>
      <section className="flex flex-wrap justify-center">
        {mealsFiltered ? (
          mealsFiltered.map((meal, i) => (
            <MealCard
              key={i}
              title={meal.name}
              imgUrl={meal.images[0]}
              allergens={meal.allergens}
              price={meal.price}
              nutrition={meal.nutritionalInfo[1]}
              stock={meal.stock}
              canBuy={true}
            />
          ))
        ) : (
          <h2>Cargando</h2>
        )}
      </section>
    </div>
  );
}

export default Meals;
