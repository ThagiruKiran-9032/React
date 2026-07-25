import React from 'react';

function ArrowFunction() {
  const greet = () => 'Hello from ES6';
  
  const discount = (price, percent) => price - (price * percent) / 100;

  const fruits = ['apple', 'banana', 'mango'];
  const fruitList = fruits.map((fruit) => `${fruit} is fresh`);

  return (
    <section>
      <h2>Arrow Functions</h2>
      <p>{greet()}</p>
      <p>{`Discounted price: ${discount(500, 20)}`}</p>
      <p>{`fruitList : ${fruitList} `}</p>
    </section>
  );
}

export default ArrowFunction;
