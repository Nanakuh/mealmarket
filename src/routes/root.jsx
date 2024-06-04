import { useEffect, useState } from "react";
import MealCard from "../components/meal-card/meal-card";
import {} from "../../public/image01.svg";
import { Link } from "react-router-dom";

function Root() {
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
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto my-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Eat healthy every day.
          </h2>
          <ul className="text-lg text-gray-700 space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> Shipments to the
              whole country.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> No subscriptions,
              no commitments.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> Your meal of the
              week in one delivery.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span> No cooking, no
              cleaning...<span className="font-bold">Ready in minutes!</span>
            </li>
          </ul>
          <Link to={"/meals"}>
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-700 text-white font-bold rounded-full">
            PLACE YOUR ORDER NOW
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="../../food.webp"
            alt="Comida sana"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="text-center py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Eat well in three steps</h2>
        <div className="flex justify-center space-x-8">
          <div className="max-w-xs">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="../../image01.svg"
                alt="Elige"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">1. Choose</h3>
              <p className="text-gray-700">
              Our chefs cook for you, a new menu every week.
              </p>
            </div>
          </div>
          <div className="max-w-xs">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="../../image02.svg"
                alt="Recibe"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">2. Receive</h3>
              <p className="text-gray-700">
              We send it to your home in refrigerated transport.
              </p>
            </div>
          </div>
          <div className="max-w-xs">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="../../image03.svg"
                alt="Calienta"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">3. Heats up</h3>
              <p className="text-gray-700">
              Your food will last 8 days in your fridge and will be ready in 3 minutes.
              </p>
            </div>
          </div>
        </div>
        <Link to={"/meals"}>
          <button className="mt-8 px-6 py-3 bg-purple-500 hover:bg-purple-700 text-white font-bold rounded-full">
            EAT HEALTHY!
          </button>
        </Link>
      </section>
      <section>
        <div className="flex flex-wrap justify-center">
          {meals ? (
            meals
              .sort(() => Math.random() - 0.5)

              .slice(0, 3)
              .map((meal, i) => (
                <MealCard
                  key={i}
                  title={meal.name}
                  imgUrl={meal.images[0]}
                  allergens={meal.allergens}
                  price={meal.price}
                  nutrition={meal.nutritionalInfo[1]}
                  stock={meal.stock}
                  canBuy={false}
                />
              ))
          ) : (
            <h2>Cargando</h2>
          )}
        </div>
      </section>
    </div>
  );
}

export default Root;
