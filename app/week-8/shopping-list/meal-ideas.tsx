"use client";
 
import { useEffect, useState } from "react";
import Image from "next/image";
 
type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};
 
export default function MealIdeas({ ingredient }: { ingredient: any }) {
  const [meals, setMeals] = useState<Meal[]>([]);
 
  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }
 
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);
 
  return (
    <div>
      <h1 className="text-2xl font-bold mb-7 ">Made with {ingredient}:</h1>
      <ul className="rounded-sm bg-gray-200 p-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex justify-center flex-col ">
            <Image src={meal.strMealThumb} alt={"Image did not load properly"} width={50} height={50}/>
            <h2 className="mb-5">{meal.strMeal}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function fetchMealIdeas(ingredient: any) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals ? data.meals : [];
  } catch (error) {
    console.error("Error calling API:", error);
    return [];
  }
}