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
  link: string;
  active?: boolean;
}

export interface PaymentCardTypes {
  name: string;
  number: number;
  expiry: string;
  logo: string;
  default: boolean;
}

export interface BillTypes {
  id: string;
  invoice: string;
  amount: string;
  date: string;
  users: string[];
}
