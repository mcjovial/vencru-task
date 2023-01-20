import React from 'react';

const NewFeature = () => {
  return (
    <div className="p-3 rounded-md bg-gray-50 text-sm my-5">
      <span className="text-gray-600">New features available!</span>
      <p className="font-light text-gray-500">
        Check out the new dashboard view. Pages now load faster
      </p>
      <img
        className="logo-icon w-full my-2"
        src="assets/images/new-feat.svg"
        alt="New feature"
      />
      <span className="text-gray-500">Dismiss</span>
      <span className="mx-3 text-purple-600">What's new?</span>
    </div>
  );
};

export default NewFeature;
