
import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = () => {
        // axios.post("http://localhost:9002/login", user)
        axios.post("https://backend-nodemongologin-secure-login-and.onrender.com/login", user)
            .then(res => {
                const { message, user: loggedInUser } = res.data;
                alert(message);
                if (loggedInUser) {
                    setLoginUser(loggedInUser); // Set loginUser state with received user data
                    navigate("/");
                } else {
                    if (message === "Incorrect Password") {
                        alert("Incorrect password. Please try again.");
                    } else {
                        alert("Login failed. Please try again.");
                    }
                }
            })
            .catch(error => {
                console.error(error);
                alert("Login failed. Please try again.");
            });
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    );
};

export default Login;
