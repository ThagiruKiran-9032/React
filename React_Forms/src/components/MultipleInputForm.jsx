import React,{useState} from "react";

function MultipleInputForm(){
    const [name,setName] = useState("");
    const [empid,setEmpId] = useState("");
    const [dep,setDep] = useState("");
    const [salary,setSalary] = useState("");
    return(
        <div>
            <h2>Multiple Input Form</h2>
            <input
                type = "text"
                placeholder = "Enter your name here"
                value = {name}
                onChange = {(event) => setName(event.target.value)}
                />
            <input
                type = "number"
                placeholder = "Enter your employee ID here"
                value = {empid}
                onChange = {(event) => setEmpId(event.target.value)}
                />
            <input
                type = "text"
                placeholder = "Enter your department here"
                value = {dep}
                onChange = {(event) => setDep(event.target.value)}
                />
            <input
                type = "number"
                placeholder = "Enter your salary here"
                value = {salary}
                onChange = {(event) => setSalary(event.target.value)}
                />

            <h3>Name: {name}</h3>
            <h3>Employee ID: {empid}</h3>
            <h3>Department: {dep}</h3>
            <h3>Salary: {salary}</h3>
        </div>
    );
}
export default MultipleInputForm;