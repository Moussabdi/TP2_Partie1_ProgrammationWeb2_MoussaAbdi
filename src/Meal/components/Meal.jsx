import { useQuery } from "@tanstack/react-query";
import MealService from "../service/MealService";
import { useParams } from "react-router-dom";

const mealService = new MealService();

const Meal = () => {
  const params = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["categories", params.idCategory],
    queryFn: () => mealService.getAllCategoriesOfMealById(params.idCategory),
  });

  console.log(params);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error.message} </div>;
  return (
    <div>
      {data &&
        data.map((categories) => {
          return (
            <div className="grid grid-cols-4 " key={categories.strCategory}>
              <h2>{categories.idCategory}</h2>
              <p>{categories.strCategory}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Meal;
