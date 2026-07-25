import React from 'react';

function Arraymap() {
  const numbers = [2, 4, 6, 8];
  const doubled = numbers.map((number) => number * 2);

  const students = [
    { name: 'Awais', score: 80 },
    { name: 'Nadia', score: 90 },
    { name: 'Hamza', score: 85 },
  ];

  const names = students.map((student) => student.name);
  const highScorers = students.filter((student) => student.score >= 85);

  return (
    <section>
      <h2>Array Methods</h2>
      <p>{names.join(' | ')}</p>
      <p>{highScorers.map((student) => student.name).join(', ')}</p>
    </section>
  );
}

export default Arraymap;
