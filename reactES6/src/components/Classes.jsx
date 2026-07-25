import React from 'react';

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  describe() {
    return `${this.name} has grade ${this.grade}`;
  }
}

function Classes() {
  const firstStudent = new Student('Sara', 'A');
  const secondStudent = new Student('Noor', 'B');

  return (
    <section>
      <h2>Classes</h2>
      <p>{firstStudent.describe()}</p>
      <p>{secondStudent.describe()}</p>
    </section>
  );
}

export default Classes;
