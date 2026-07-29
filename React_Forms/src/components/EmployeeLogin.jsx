import React, { useState } from "react";

function Employee() {
    const [employee, setEmployee] = useState({
        employeeName: "",
        employeeId: "",
        department: "",
        workType: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(employee);

        setEmployee({
            employeeName: "",
            employeeId: "",
            department: "",
            workType: ""
        });
    }

    return (
        <div>
            <h2>Employee Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Employee Name
                    <input
                        type="text"
                        name="employeeName"
                        value={employee.employeeName}
                        onChange={handleChange}
                        placeholder="Enter employee name"
                    />
                </label>
                <br />

                <label>
                    Employee ID
                    <input
                        type="number"
                        name="employeeId"
                        value={employee.employeeId}
                        onChange={handleChange}
                        placeholder="Enter employee ID"
                    />
                </label>
                <br />

                <label>
                    Department
                    <input
                        type="text"
                        name="department"
                        value={employee.department}
                        onChange={handleChange}
                        placeholder="Enter department"
                    />
                </label>
                <br />

                <p>Work Type</p>

                <label>
                    <input
                        type="radio"
                        name="workType"
                        value="Onsite"
                        checked={employee.workType === "Onsite"}
                        onChange={handleChange}
                    />
                    Onsite
                </label>

                <label>
                    <input
                        type="radio"
                        name="workType"
                        value="Remote"
                        checked={employee.workType === "Remote"}
                        onChange={handleChange}
                    />
                    Remote
                </label>
    

                <label>
                    <input
                        type="radio"
                        name="workType"
                        value="Hybrid"
                        checked={employee.workType === "Hybrid"}
                        onChange={handleChange}
                    />
                    Hybrid
                </label>
                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Employee;
