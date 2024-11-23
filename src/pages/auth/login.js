import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../../http';

export default function Login() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const submitForm = () => {
        // Send POST request with inputs data
        http.post('/login', inputs)
            .then(res => {
                console.log(res.data);
                // Set success message
                setMessage({ text: 'Login successful!', type: 'success' });

                // Optionally navigate after successful login
                // navigate('/');
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                // Set error message
                setMessage({ text: 'Something went wrong. Please try again.', type: 'danger' });
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Login</h2>

                {/* Conditional Alert Messages */}
                {message.text && (
                    <div className={`alert alert-${message.type} mb-3`} role="alert">
                        {message.text}
                    </div>
                )}

                {/* Email Field */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={inputs.email || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={inputs.password || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" onClick={submitForm} className="btn btn-primary w-100">
                    Login
                </button>

                {/* Additional Links */}
                <div className="text-center mt-3">
                    <small>
                        Don't have an account? <a href="/register">Register here</a>
                    </small>
                </div>
            </div>
        </div>
    );
}
