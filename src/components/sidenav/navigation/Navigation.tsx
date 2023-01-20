import React, { useState } from 'react';
import { navItems } from '../../../data';
import { NavItemTypes } from '../../../utils/types';
import NavItem from './NavItem';

const Navigation = () => {
const [navitems, setNavitems] = useState(navItems)
  return (
    <>
      {navitems.map((item: NavItemTypes, i: React.Key | null | undefined) => {
        if (item.type === 'primary')
          return (
            <div key={i}>
              <NavItem
                icon={item.icon}
                name={item.name}
                link={item.link}
                count={item.count}
                active={item.active}
              />
            </div>
          );
      })}
      <div className="mt-2">
        {navItems.map((item: NavItemTypes, i: React.Key | null | undefined) => {
          if (item.type === 'secondary')
            return (
              <div key={i}>
                <NavItem
                  icon={item.icon}
                  name={item.name}
                  link={item.link}
                  count={item.count}
                  active={item.active}
                />
              </div>
            );
        })}
      </div>
    </>
  );
};

export default Navigation;
