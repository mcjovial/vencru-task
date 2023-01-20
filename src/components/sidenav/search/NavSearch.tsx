import React from 'react';

const NavSearch = () => {
  return (
    <div className="relative my-5">
      <div className="absolute py-2.5 px-3">
        <img src="assets/images/search.svg" alt="" />
      </div>
      <input
        className="border border-solid rounded-lg border-gray-300 font-light focus:outline-purple-600 w-full pl-10 py-2"
        type="search"
        name=""
        placeholder="Search"
      />
    </div>
  );
};

export default NavSearch;
