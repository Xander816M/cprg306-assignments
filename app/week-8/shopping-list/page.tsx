"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item: any) => {
    let cleanedName = item.name.split(",")[0].trim().toLowerCase();

    cleanedName = cleanedName.replace(/[^a-z\s]/g, "").trim();

    if (cleanedName.endsWith("s")) {
      cleanedName = cleanedName.slice(0, -1);
    }

    setSelectedItemName(cleanedName);
  };

  const handleAddItem = (newItem: any) => {
    setItems([...items, newItem]);
  };

  if (!user) {
    return (
      <div className="flex justify-center bg-emerald-500 h-screen items-center">
        <div className="flex flex-col text-center items-center bg-gray-200 w-1/3 pt-10 pb-10 gap-8">
          <h1>Please log in to view the shopping list.</h1>
          <Link href={"/week-8"} className="border rounded-sm p-2 bg-cyan-300 w-1/3">Login page</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="flex justify-around pt-14 bg-emerald-500">
      <div className="text-center flex flex-col mr-5 ml-5 w-1/2">
        <h1 className="text-2xl font-bold pb-1 ">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 mr-5 ml-5">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
