import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="px-20">
        <h1 className="font-bold text-2xl pt-4 pb-2" >Shopping List</h1>
        <ItemList/>
    </main>
  );
}