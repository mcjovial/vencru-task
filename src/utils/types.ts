import { FC } from "react";

export interface NavItemTypes {
  icon: string;
  name: string;
  link: string;
  count?: number;
  type?: string;
  active?: boolean;
}

export interface SettingsNavItemTYpes {
  name: string;
  component: FC;
  active?: boolean;
}

export interface PaymentCardTypes {
  id: string;
  name: string;
  number: number;
  expiry: string;
  logo: string;
}

export interface BillTypes {
  id: string;
  invoice: string;
  amount: string;
  date: string;
  users: string[];
}

export interface SettingsNavItem {
  name: string;
  value: SettingsNavName;
  icon?: string;
  component: React.FunctionComponent;
}

export type SettingsNavName = 'MY_DETAILS' | 'PROFILE' | 'PASSWORD' | 'TEAM' | 'PLAN' | 'BILLING' | 'NOTIFICATIONS' | 'INTEGRATIONS' | 'API'