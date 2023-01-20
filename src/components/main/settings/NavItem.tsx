import React, { FC } from 'react';
import { SettingsNavItemTYpes } from '../../../utils/types';

interface NavItemProps {
  button: SettingsNavItemTYpes;
  index: number;
  length: number;
}

const NavItem: FC<NavItemProps> = ({ button, index, length }) => {
  return (
    <>
      <a
        className={`text-sm hover:bg-[#F9FAFB] border-l-0 text-primary font-light py-2.5 px-4 border border-[#D0D5DD] ${index === 0 ? 'border-l rounded-l-lg' : ''} ${index === length - 1 ? 'rounded-r-lg' : ''} ${button.active ? 'bg-transparent' : 'bg-white'}`}
        key={index}
        href={button.link}
      >
        {button.name}
      </a>
    </>
  );
};

export default NavItem;
