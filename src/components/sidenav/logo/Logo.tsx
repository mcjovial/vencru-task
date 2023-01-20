import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        className="logo-icon w-10 h-10"
        src="assets/images/logo.svg"
        alt="logo"
      />
      <span className="react-text text-lg mx-4 font-normal">Untitled UI</span>
    </div>
  );
};

export default Logo;
