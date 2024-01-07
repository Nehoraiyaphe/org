import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/matchingClothes');
  };

  return (
    <div className="bg-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Fashion Advice Daily
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<AboutContent />} />
      </Routes>

      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold"
          onClick={handleButtonClick}
        >
          Click here to start
        </button>
      </div>
    </div>
  );
};

const HomeContent: React.FC = () => {
  return <p>Content for the home page.</p>;
};

const AboutContent: React.FC = () => {
  return <p>Content for the about page.</p>;
};

export default HomePage;





















