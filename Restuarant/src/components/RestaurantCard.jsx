function RestaurantCard({ name, cuisine, buttonText }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{cuisine}</p>
      <button>{buttonText}</button>
    </article>
  );
}

export default RestaurantCard;
