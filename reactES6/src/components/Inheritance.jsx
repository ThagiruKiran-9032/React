import React from 'react';

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

function Inheritance() {
  const pet1 = new Dog('Buddy');
  const pet2 = new Cat('Milo');

  return (
    <section>
      <h2>Inheritance</h2>
      <p>{pet1.speak()}</p>
      <p>{pet2.speak()}</p>
    </section>
  );
}

export default Inheritance;
