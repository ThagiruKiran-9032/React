import React from 'react';

function Ternary() {
  const age = 18;
  const status = age >= 18 ? 'Adult' : 'Minor';
  const isLoggedIn = true;
  const welcomeMessage = isLoggedIn ? 'Welcome back!' : 'Please log in';

  return (
    <section>
      <h2>Ternary Operator</h2>
      <p>{status}</p>
      <p>{welcomeMessage}</p>
    </section>
  );
}

export default Ternary;
