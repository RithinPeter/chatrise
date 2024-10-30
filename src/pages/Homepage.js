import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <h1>Welcome to Chat App</h1>
            <p>
                <Link to="/register">Register</Link> or <Link to="/login">Login</Link> to start chatting!
            </p>
        </div>
    );
};

export default Homepage;
