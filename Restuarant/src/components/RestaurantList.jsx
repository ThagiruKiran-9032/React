import RestaurantCard from "./RestaurantCard";

const restaurants = [
  { id: 1, name: "Spicy Bites", cuisine: "Fast food and burgers", buttonText: "View Menu" },
  { id: 2, name: "Golden Fork", cuisine: "Italian and pasta", buttonText: "Check Specials" },
  { id: 3, name: "Blue Harbor", cuisine: "Seafood and grills", buttonText: "Explore Dishes" },
];

function RestaurantList() {
  return (
    <section>
      <h2>Popular Restaurants</h2>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          cuisine={restaurant.cuisine}
          buttonText={restaurant.buttonText}
        />
      ))}
    </section>
  );
}

export default RestaurantList;
