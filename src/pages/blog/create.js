import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        // Check if the auth token is in localStorage
        const token = localStorage.getItem('auth_token');

        if (token) {
            // If the token exists, you can optionally validate it by making an API request
            // For now, we assume the token is valid
            setIsAuthenticated(true);
        } else {
            // If no token is found, the user is not authenticated
            setIsAuthenticated(false);
        }
    }, []);

    if (isAuthenticated === null) {
        // Optionally return a loading state if checking is still in progress
        return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
        // If not authenticated, show an unauthorized message
        return (
            <div className="alert alert-danger" role="alert">
                You are not authorized to view this page. Please log in.
            </div>
        );
    }

    // If authenticated, show the Create Page content
    return (
        <div>
            <h2>Create Page</h2>
            <p>Welcome to the Create Page!</p>
        </div>
    );
}
