import React from 'react';

function Destructuring() {
  const user = { name: 'Zara', age: 22, city: 'Karachi' };
  const { name, city } = user;

  const colors = ['red', 'green', 'blue'];
  const [firstColor, secondColor] = colors;

  const book = ['JavaScript Basics', 2024];
  const [title, year] = book;

  return (
    <section>
      <h2>Destructuring</h2>
      <p>{`User profile: ${name} lives in ${city}`}</p>
      <p>{`First color: ${firstColor}`}</p>
      <p>{`year: ${year}`}</p>
    </section>
  );
}

export default Destructuring;
