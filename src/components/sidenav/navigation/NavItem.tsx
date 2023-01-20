import React from 'react';
import { NavItemTypes } from '../../../utils/types';

type NavItemProps = NavItemTypes;

const NavItem: React.FC<NavItemProps> = ({
  icon,
  name,
  link,
  count,
  active,
}) => {
  return (
    <div className='flex justify-between'>
      <div
        className={`flex items-center my-0 ${
          active ? 'bg-gray-50' : ''
        } py-2 px-3 rounded-md`}
      >
        <img className="logo-icon w-5 h-5" src={icon} alt={name} />
        <span className="mx-3 text-sm text-gray-600">{name}</span>
      </div>
      {
        count ?
        <div className='bg-slate-100 rounded-full flex items-center my-2 px-2.5'><span className='text-xs'>{count}</span></div>
          :''
      }
    </div>
  );
};

export default NavItem;
