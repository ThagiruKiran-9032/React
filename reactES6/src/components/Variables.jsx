import React from 'react';

function Variables() {
  const age = 21;
  const name = 'Rahul';
  const status = 'active';

  let score = 10;
  score = 15;

  const student = {
    name: 'Karan',
    course: 'React',
  };

  student.course = 'React ES6';

  return (
    <section>
      <h2>Variables</h2>
      <p>Welcome back, {name}!</p>
      <p>Your account is {status}.</p>
      <p>Updated score: {score}</p>
    </section>
  );
}

export default Variables;
