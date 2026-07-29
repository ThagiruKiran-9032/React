import React, { useState } from "react";

function ControlledForm(){
    const [name,setName] = useState("");

    return(
        <div>
            <h2>Controlled Component</h2>
            <input
                type = "text"
                placeholder = "Enter your name here"                
                value = {name}
                onChange = {(event) => setName(event.target.value)}
            />
            <h3>Your Name : {name}</h3>
        </div>
    );
}
export default ControlledForm;