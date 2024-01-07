import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          © 2023 FashionAdviceDaily.com. All rights reserved.
        </p>
        <nav className="mt-2">
          <Link to="/privacy" className="text-blue-500 hover:underline mx-2">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-blue-500 hover:underline mx-2">
            Terms of Service
          </Link>
          <Link to="/contact" className="text-blue-500 hover:underline mx-2">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

