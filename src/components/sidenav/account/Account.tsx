import React from 'react';

const Account = () => {
  return (
    <div className="pl-3 rounded-md text-sm my-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="logo-icon w-9 h-9 my-2"
          src="assets/images/avatar.svg"
          alt="New feature"
        />
        <div className="mx-2">
          <p className="text-gray-600">Olivia Rhye</p>
          <a
            className="font-light text-gray-500"
            href="mailto:olivia@untitledui.com"
          >
            olivia@untitledui.com
          </a>
        </div>
      </div>
      <img
        className="logo-icon w-8 h-8 my-2"
        src="assets/images/out.svg"
        alt="New feature"
      />
    </div>
  );
};

export default Account;
