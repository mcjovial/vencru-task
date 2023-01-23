import { useState } from 'react';
import Heading from '../../../components/main/Heading';
import NavItem from '../../../components/main/settings/NavItem';
import API from './api/Index';
import Billing from './billing/Index';
import MyDetails from './details/Index';
import Integrations from './integrations/Index';
import Notifications from './notifications/Index';
import Password from './password/Index';
import Plan from './Plan/Index';
import Profile from './profile/Index';
import Team from './team/Index';

const Settings = () => {
  const [selectedNav, setSelectedNav] = useState('BILLING')
  // {[index: string]:any}
  const SETTINGS_NAV: Record<string, any> = {
    MY_DETAILS: {
      name: 'My details',
      value: 'MY_DETAILS',
      component: MyDetails,
    },
    PROFILE: { name: 'Profile', value: 'PROFILE', component: Profile },
    PASSWORD: { name: 'Password', value: 'PASSWORD', component: Password },
    TEAM: { name: 'Team', value: 'TEAM', component: Team },
    PLAN: { name: 'Plan', value: 'PLAN', component: Plan },
    BILLING: { name: 'Billing', value: 'BILLING', component: Billing },
    NOTIFICATIONS: {
      name: 'Notifications',
      value: 'NOTIFICATIONS',
      component: Notifications,
    },
    INTEGRATIONS: {
      name: 'Integrations',
      value: 'INTEGRATIONS',
      component: Integrations,
    },
    API: { name: 'API', value: 'API', component: API },
  };

  const SettingsNav = SETTINGS_NAV[selectedNav];
  const Component = SettingsNav.component ?? Billing;
  const values = Object.values(SETTINGS_NAV);
  return (
    <>
      <Heading
        page='Settings'
        description='Manage your team and preferences here.'
      />
      <>
        <div className='my-8'>
          <div className='overflow-auto p-4 flex'>
            {values.map((nav, index) => (
              <NavItem key={index} nav={nav} index={index} selectedNav={selectedNav} setSelectedNav={setSelectedNav} count={values.length} />
            ))}
          </div>
        </div>
      </>
      <>
        <Component />
      </>
    </>
  );
};

export default Settings;
