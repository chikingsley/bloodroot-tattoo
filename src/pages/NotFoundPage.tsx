import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-zinc-100 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-zinc-400 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}; 