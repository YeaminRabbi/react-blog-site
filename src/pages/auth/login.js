import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import http from '../../http';

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation(); // Access current location (URL)
    const [inputs, setInputs] = useState({});
    const [message, setMessage] = useState({ text: '', type: '' });

    // Parse the query parameters to check for 'success'
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const success = queryParams.get('success');

        if (success === 'true') {
            setMessage({ text: 'Registration successful! Please login.', type: 'success' });
        }
    }, [location]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const submitForm = () => {
        // Send POST request with inputs data
        http.post('/login', inputs)
            .then(res => {

                // Set success message
                setMessage({ text: 'Login successful!', type: 'success' });

                // Store the token in localStorage
                localStorage.setItem('auth_token', res.data.access_token);
                localStorage.setItem('token_type', res.data.token_type);
                localStorage.setItem('user', res.data.user);

                // Optionally navigate after successful login
                navigate('/create');
            })
            .catch(error => {
                // Set error message
                setMessage({ text: 'Something went wrong. Please try again.', type: 'danger' });
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Sign-in</h2>

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
