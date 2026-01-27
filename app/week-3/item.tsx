interface ItemProps {
    name: string;
    quantity: number;
    category: string;
}

const Item =({
    name, 
    quantity, 
    category,
}: ItemProps) => {
    return (
        <div className="border rounded-sm mt-4 px-2">
           <h3>{name}</h3> 
           <h3>Quantity: {quantity}</h3>
           <h3>Category: {category}</h3>
        </div>
    );
};

export default Item;