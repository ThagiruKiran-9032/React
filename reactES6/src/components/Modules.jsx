import React from 'react';

const greeting = 'Welcome to ES6 modules';

function formatMessage(name) {
  return `Hello ${name}`;
}

function Modules() {
  return (
    <section>
      <h2>Modules</h2>
      <p>{greeting}</p>
      <p>{formatMessage('Bilal')}</p>
    </section>
  );
}

export default Modules;
