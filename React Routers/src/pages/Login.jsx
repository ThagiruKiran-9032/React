import { Navigate } from "react-router-dom";

function Login() {

    const isLoggedIn = true;

    if (isLoggedIn) {
        return <Navigate to="/profile" />;
    }

    return (
        <h1>Login Page</h1>
    );
}

export default Login;
