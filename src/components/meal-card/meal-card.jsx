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

MealCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  weight: PropTypes.string,
  allergens: PropTypes.array,
  price: PropTypes.number.isRequired,
  calories: PropTypes.number,
  nutrition: {
    proteins: PropTypes.string,
    carbohydrates: PropTypes.string,
    fats: PropTypes.string,
  },
  soldOut: PropTypes.bool.isRequired,
};

function MealCard({
  title,
  imgUrl,
  weight,
  allergens,
  price,
  calories,
  nutrition,
  soldOut,
}) {
  function getAllergen(allergen) {
    if (allergen === "Nuts") {
      return <NutsIcon width={25} height={25} />;
    }
    if (allergen === "Gluten") {
      return <GlutenIcon width={25} height={25} />;
    }
    if (allergen === "Crustacean") {
      return <CrustaceanIcon width={25} height={25} />;
    }
    if (allergen === "Fish") {
      return <FishIcon width={25} height={25} />;
    }
    if (allergen === "Peanut") {
      return <PeanutIcon width={25} height={25} />;
    }
    if (allergen === "Soya") {
      return <SoyaIcon width={25} height={25} />;
    }
    if (allergen === "Milk") {
      return <MilkIcon width={25} height={25} />;
    }
    if (allergen === "Celery") {
      return <CeleryIcon width={25} height={25} />;
    }
    if (allergen === "Mustard") {
      return <MustardIcon width={25} height={25} />;
    }
    if (allergen === "Sesame") {
      return <SesameIcon width={25} height={25} />;
    }
    if (allergen === "Sulphite") {
      return <SulphiteIcon width={25} height={25} />;
    }
    if (allergen === "Lupin") {
      return <LupinIcon width={25} height={25} />;
    }
    if (allergen === "Mollusc") {
      return <MolluscIcon width={25} height={25} />;
    }
    if (allergen === "Egg") {
      return <EggIcon width={25} height={25} />;
    }
  }

  return (
    <Card className="max-w-sm m-5" imgAlt={title} imgSrc={imgUrl}>
      <a href={`/${title}`}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <p>{weight}</p>
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
      <div className="flex items-center justify-between">
        <p>{calories} calories</p>
        <p>{`proteins: ${nutrition.proteins}`}</p>
        <p>{`carbohydrates: ${nutrition.carbohydrates}`}</p>
        <p>{`fats: ${nutrition.fats}`}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price/100} €
        </span>

        <Button color="success" disabled={soldOut}>
          {soldOut ? "Out of stock" : "Add to cart"}
        </Button>
      </div>
    </Card>
  );
}
export default MealCard;
