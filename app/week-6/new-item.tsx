"use client";
import { useState } from "react";
import Item from "./item";

const NewItem = ({onAddItem}: {onAddItem: any}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [nameTouched, setNameTouched] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || name.length < 2) {
      alert(
        "Enter info into all fields and make sure name is more then 3 letters",
      );
      return;
    }
    <Item name={name} quantity={quantity} category={category} />;
    console.log(Item);

    const newItem ={
      name,
      quantity,
      category
    }
    onAddItem(
     newItem
    );
    setName("");
    setQuantity(1);
    setCategory("Produce");
    setNameTouched(false)
  }

  return (
    <div className="flex justify-center rounded-sm bg-gray-200 mt-6 p-2 mr-60 ml-60">
      <form className="space-y-1">
        <input
          className={`pt-0.5 pd-0.5 text-center
            ${
              nameTouched && name == ""
                ? "border-2 border-red-700"
                : "border border-black rounded-sm"
            }`}
          required
          onBlur={() => setNameTouched(true)}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="text-red-500">
          {nameTouched && name == "" ? `From for name is empty` : null}
        </p>
        <input
          className="border border-black pl-18 pr-14.5 rounded-sm text-center p-0.5"
          required
          type="number"
          min={1}
          max={99}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <select
          className="flex border border-black pr-16 rounded-sm p-1"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value={"Produce"}>Produce</option>
          <option value={"Dairy"}>Dairy</option>
          <option value={"Bakery"}>Bakery</option>
          <option value={"Meat"}>Meat</option>
          <option value={"Frozen Foods"}>Frozen Foods</option>
          <option value={"Canned Goods"}>Canned Goods</option>
          <option value={"Dry Goods"}>Dry Goods</option>
          <option value={"Beverages"}>Beverages</option>
          <option value={"Snacks"}>Snacks</option>
          <option value={"Household"}>Household</option>
          <option value={"Other"}>Other</option>
        </select>
        <button
          disabled={name == "" ? true : false}
          className="disabled:bg-gray-350 disabled:cursor-not-allowed rounded-sm px-14 mx-4 border"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;
