import ItemCard from "./ItemCard";

const menuItems = [
  { id: 1, name: "Cheese Pizza", description: "Fresh tomato sauce and melted cheese", buttonText: "Add to Cart" },
  { id: 2, name: "Chicken Burger", description: "Grilled chicken with spicy sauce", buttonText: "Order Now" },
  { id: 3, name: "Veggie Wrap", description: "Crispy veggies with flavorful dressing", buttonText: "Add to Cart" },
];

function Menu() {
  return (
    <section>
      <h2>Popular Menu</h2>
      {menuItems.map((item) => (
        <ItemCard
          key={item.id}
          {...item}
          />
      ))}
    </section>
  );
}

export default Menu;
