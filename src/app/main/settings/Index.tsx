import React from 'react';
import Heading from '../../../components/main/Heading';
import BillingHistory from './BillingHistory';
import SettingsNav from './Nav';
import PaymentInfo from './PaymentInfo';

const Settings = () => {
  return (
    <>
      <Heading
        page="Settings"
        description="Manage your team and preferences here."
      />
      <SettingsNav />
      <PaymentInfo />
      <BillingHistory />
    </>
  );
};

export default Settings;
