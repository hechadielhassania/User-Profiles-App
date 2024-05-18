import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/404.gif'


function NotFoundPage() {
  return (
    <div className="not-found-container">
      <img src={image} alt="" />
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
}

export default NotFoundPage;
