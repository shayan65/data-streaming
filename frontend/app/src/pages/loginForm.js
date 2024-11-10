import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const LoginForm = () => {
    const initialValues = {
        username: "",
        password: "",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // Send form data to backend
            axios
                .post("http://localhost:5000/api/login", {
                    username: formValues.username,
                    password: formValues.password,
                })
                .then((response) => {
                    console.log("Login successful:", response.data);
                    // Handle successful login (e.g., store JWT token, redirect to dashboard, etc.)
                })
                .catch((error) => {
                    console.error("Error logging in:", error.response ? error.response.data : error.message);
                });
        }
    }, [formErrors, formValues, isSubmit]);

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        return errors;
    };

    return (
        <>
            <div className="bgImg"></div>
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">Logged in successfully!</div>
                ) : (
                    console.log("Entered Details", formValues)
                )}

                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>
                        <button className="fluid ui button blue">Login</button>
                    </div>
                </form>
                <div className="text">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
