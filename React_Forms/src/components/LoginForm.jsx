import React, { useState } from "react";

function LoginForm() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    

    function handleChange(event) {
        const { name, value } = event.target;

        setUser((preUser) => ({
            ...preUser,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(user);

        //Reset the form
        setUser({
            email: "",
            password: ""
        });
    }

    return (
        <div>
            <h2>Login Form</h2>
        
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </label>
                <br />
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </label>
                <br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;