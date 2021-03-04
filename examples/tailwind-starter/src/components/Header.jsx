import React from 'react';

const Header = ({ title }) => (
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-gray-900">{title}</h1>
    </div>
  </header>
);

export default Header;
