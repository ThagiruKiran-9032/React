import React, { useState } from "react";

function StudentForm() {
    const [student, setStudent] = useState({
        name: "",
        id: "",
        age: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setStudent(prevStudent => ({
            ...prevStudent,
            [name]: value
        }));
    }

    return (
        <div>
            <h2>Multiple Input Spread Operator</h2>
            <input
                type="text"
                name="name"
                placeholder="Enter your name here"
                value={student.name}
                onChange={handleChange}
            />
            <input
                type="number"
                name="id"
                placeholder="Enter your ID here"
                value={student.id}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Enter your age here"
                value={student.age}
                onChange={handleChange}
            />
            <h3>Name: {student.name}</h3>
            <h3>ID: {student.id}</h3>
            <h3>Age: {student.age}</h3>
        </div>

        
    );
}
export default StudentForm;