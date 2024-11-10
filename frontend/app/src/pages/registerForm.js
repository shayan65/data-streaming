import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // For navigating to Login page
import "../App.css";

const RegisterForm = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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
            // Send registration data to backend
            axios
                .post("http://localhost:5000/api/register", formValues)
                .then((response) => {
                    console.log("Registration successful:", response.data);
                    // Redirect to login page (or show success message)
                    alert("Registration successful! Please log in.");
                })
                .catch((error) => {
                    console.error("Error registering:", error.response ? error.response.data : error.message);
                    // You can also handle server error here, e.g., username already taken
                });
        }
    }, [formErrors, formValues, isSubmit]);

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords must match!";
        }
        return errors;
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Choose a username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.username}</p>

                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.email}</p>

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

                    <div className="field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.confirmPassword}</p>

                    <button className="fluid ui button blue">Register</button>
                </div>
            </form>

            <div className="text">
                Already have an account? <Link to="/">Login</Link>
            </div>
        </div>
    );
};

export default RegisterForm;
