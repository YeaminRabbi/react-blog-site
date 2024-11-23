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
        http.post('/users', inputs)
            .then(res => {

                // Navigate after successful login
                navigate('/login' + '?success=true');
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
                <h2 className="text-center mb-4">Sign-up</h2>

                {/* Conditional Alert Messages */}
                {message.text && (
                    <div className={`alert alert-${message.type} mb-3`} role="alert">
                        {message.text}
                    </div>
                )}

                {/* Name Field */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={inputs.name || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

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
                    Register
                </button>


                {/* Additional Links */}
                <div className="text-center mt-3">
                    <small>
                        You have an account? <a href="/login">Login here</a>
                    </small>
                </div>
            </div>
        </div>
    );
}
