import PropTypes from "prop-types";
import { Card, Button } from "flowbite-react";
import {
  NutsIcon,
  CrustaceanIcon,
  GlutenIcon,
  EggIcon,
  FishIcon,
  PeanutIcon,
  SoyaIcon,
  MilkIcon,
  CeleryIcon,
  MustardIcon,
  SesameIcon,
  SulphiteIcon,
  LupinIcon,
  MolluscIcon,
} from "react-allergens";
import NutritionalData from "../nutritional-data/nutritional-data";

MealCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  allergens: PropTypes.array,
  price: PropTypes.number.isRequired,
  nutrition: {
    quantity: PropTypes.string,
    calories: PropTypes.string,
    energy: PropTypes.string,
    fats: PropTypes.string,
    saturatedFats: PropTypes.string,
    carbohydrates: PropTypes.string,
    sugars: PropTypes.string,
    protein: PropTypes.string,
    dietaryFiber: PropTypes.string,
    salt: PropTypes.string,
  },
  stock: PropTypes.number.isRequired,
};

function MealCard({ title, imgUrl, allergens, price, nutrition, stock }) {
  function getAllergen(allergen) {
    if (allergen === "NUTS") {
      return <NutsIcon width={25} height={25} />;
    }
    if (allergen === "GLUTEN") {
      return <GlutenIcon width={25} height={25} />;
    }
    if (allergen === "CRUSTACEAN") {
      return <CrustaceanIcon width={25} height={25} />;
    }
    if (allergen === "FISH") {
      return <FishIcon width={25} height={25} />;
    }
    if (allergen === "PEANUT") {
      return <PeanutIcon width={25} height={25} />;
    }
    if (allergen === "SOYA") {
      return <SoyaIcon width={25} height={25} />;
    }
    if (allergen === "MILK") {
      return <MilkIcon width={25} height={25} />;
    }
    if (allergen === "CELERY") {
      return <CeleryIcon width={25} height={25} />;
    }
    if (allergen === "MUSTARD") {
      return <MustardIcon width={25} height={25} />;
    }
    if (allergen === "SESAME") {
      return <SesameIcon width={25} height={25} />;
    }
    if (allergen === "SULPHITE") {
      return <SulphiteIcon width={25} height={25} />;
    }
    if (allergen === "LUPIN") {
      return <LupinIcon width={25} height={25} />;
    }
    if (allergen === "MOLLUSC") {
      return <MolluscIcon width={25} height={25} />;
    }
    if (allergen === "EGG") {
      return <EggIcon width={25} height={25} />;
    }
  }

  return (
    <Card className="max-w-sm m-5" imgAlt={title} imgSrc={imgUrl}>
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p>{nutrition.quantity}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-row ">
          {allergens.map((allergen, i) => {
            return (
              <div key={i} className="mx-1">
                {getAllergen(allergen)}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-100 flex items-center justify-around p-2 rounded-3xl">
        <NutritionalData name={"calories"} value={nutrition.calories} />
        <NutritionalData name={"fats"} value={nutrition.fats} />
        <NutritionalData name={"sugars"} value={nutrition.sugars} />
        <NutritionalData name={"protein"} value={nutrition.protein} />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price.toFixed(2)} €
        </span>

        <Button color="success" disabled={stock > 0 ? false : true}>
          {stock > 0 ? "Add to cart" : "Out of stock"}
        </Button>
      </div>
    </Card>
  );
}
export default MealCard;
