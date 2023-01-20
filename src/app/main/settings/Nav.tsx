import React, { useState } from 'react';
import NavItem from '../../../components/main/settings/NavItem';
import { navButtons } from '../../../data';

const SettingsNav = () => {
  const [buttons, setButtons] = useState(navButtons)

  return (
    <div className="my-8">
      <div className='overflow-auto p-4'>
        {buttons.map((button, index) => (
          <NavItem
            key={index}
            button={button}
            index={index}
            length={buttons.length}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsNav;
