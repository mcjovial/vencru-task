import React from 'react';
import Account from './account/Account';
import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';
import NewFeature from './new-feature/NewFeature';
import NavSearch from './search/NavSearch';

const SideNavContent = () => {
  return (
    <div className="flex flex-auto flex-col overflow-hidden h-full mx-6 my-6">
      <Logo />
      <NavSearch />
      <Navigation />
      <NewFeature />
      <hr />
      <Account />
    </div>
  );
};

export default SideNavContent;
