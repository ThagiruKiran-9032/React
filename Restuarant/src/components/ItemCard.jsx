function ItemCard({ name, description, buttonText }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </article>
  );
}

export default ItemCard;
