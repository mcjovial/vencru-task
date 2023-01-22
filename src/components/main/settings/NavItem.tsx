import React, { FC } from 'react';
import { SettingsNavItem, SettingsNavItemTYpes } from '../../../utils/types';

interface NavItemProps {
  nav: SettingsNavItem;
  index: number;
  count: number;
  selectedNav: string;
  setSelectedNav: any;
}

const NavItem: FC<NavItemProps> = ({
  nav,
  index,
  count,
  selectedNav,
  setSelectedNav,
}) => {
  return (
    <>
      <button
        value={nav.value}
        className={`text-sm hover:bg-[#F9FAFB] border-l-0 text-primary whitespace-nowrap font-light py-2.5 px-4 border border-[#D0D5DD] ${
          index === 0 ? 'border-l rounded-l-lg' : ''
        } ${index === count - 1 ? 'rounded-r-lg' : ''} ${
          selectedNav === nav.value ? 'bg-transparent' : 'bg-white'
        }`}
        key={index}
        onClick={(e) => setSelectedNav(e.target.value)}
      >
        {nav.name}
      </button>
    </>
  );
};

export default NavItem;
