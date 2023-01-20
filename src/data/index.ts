import { BillTypes, SettingsNavItemTYpes } from "../utils/types";

export const navItems = [
  {
    name: 'Home',
    icon: 'assets/images/home.svg',
    link: 'a-link',
    type: 'primary',
  },
  {
    name: 'Dashboard',
    icon: 'assets/images/dash.svg',
    link: 'a-link',
    type: 'primary',
    count: 10,
  },
  {
    name: 'Projects',
    icon: 'assets/images/proj.svg',
    link: 'a-link',
    type: 'primary',
  },
  {
    name: 'Tasks',
    icon: 'assets/images/tasks.svg',
    link: 'a-link',
    type: 'primary',
  },
  {
    name: 'Reporting',
    icon: 'assets/images/report.svg',
    link: 'a-link',
    type: 'primary',
  },
  {
    name: 'Users',
    icon: 'assets/images/users.svg',
    link: 'a-link',
    type: 'primary',
  },
  {
    name: 'Support',
    icon: 'assets/images/support.svg',
    link: 'a-link',
    type: 'secondary',
  },
  {
    name: 'Settings',
    icon: 'assets/images/settings.svg',
    link: 'a-link',
    type: 'secondary',
    active: true,
  },
];

export const navButtons: SettingsNavItemTYpes[] = [
  { name: 'My details', link: '#', active: false },
  { name: 'Profile', link: '#' },
  { name: 'Password', link: '#' },
  { name: 'Team', link: '#' },
  { name: 'Plan', link: '#' },
  { name: 'Billing', link: '#', active: true },
  { name: 'Notifications', link: '#' },
  { name: 'Integrations', link: '#' },
  { name: 'API', link: '#' },
];

export const cardOptions = [
  {
    id: '#1',
    name: 'Visa',
    number: 1234,
    expiry: '06/2024',
    logo: 'assets/images/visa.svg',
    default: true,
  },
  {
    id: '#2',
    name: 'Mastercard',
    number: 1234,
    expiry: '06/2024',
    logo: 'assets/images/mastercard.svg',
    default: false,
  },
];

export const billsHistory: BillTypes[] = [
  {
    id: '#1',
    invoice: 'Basic plan - Dec 2022',
    amount: '10.00',
    date: 'Dec 1, 2022',
    users: [
      'assets/images/av1.svg',
      'assets/images/av2.svg',
      'assets/images/av3.svg',
      'assets/images/av4.svg',
      'assets/images/av5.svg',
      'assets/images/av4.svg',
      'assets/images/av5.svg',
    ],
  },
  {
    id: '#2',
    invoice: 'Basic plan - Nov 2022',
    amount: '10.00',
    date: 'Nov 1, 2022',
    users: [
      'assets/images/av1.svg',
      'assets/images/av2.svg',
      'assets/images/av3.svg',
      'assets/images/av4.svg',
      'assets/images/av1.svg',
      'assets/images/av5.svg',
    ],
  },
  {
    id: '#3',
    invoice: 'Basic plan - Oct 2022',
    amount: '10.00',
    date: 'Oct 1, 2022',
    users: [
      'assets/images/av2.svg',
      'assets/images/av3.svg',
      'assets/images/av4.svg',
      'assets/images/av5.svg',
      'assets/images/av4.svg',
    ],
  },
  {
    id: '#4',
    invoice: 'Basic plan - Sep 2022',
    amount: '10.00',
    date: 'Sep 1, 2022',
    users: [
      'assets/images/av1.svg',
      'assets/images/av2.svg',
      'assets/images/av3.svg',
    ],
  },
  {
    id: '#5',
    invoice: 'Basic plan - Aug 2022',
    amount: '10.00',
    date: 'Aug 1, 2022',
    users: [
      'assets/images/av1.svg',
      'assets/images/av2.svg',
      'assets/images/av3.svg',
      'assets/images/av4.svg',
    ],
  },
  {
    id: '#6',
    invoice: 'Basic plan - Jul 2022',
    amount: '10.00',
    date: 'Jul 1, 2022',
    users: [
      'assets/images/av1.svg',
      'assets/images/av3.svg',
      'assets/images/av4.svg',
      'assets/images/av5.svg',
    ],
  },
  {
    id: '#7',
    invoice: 'Basic plan - Jun 2022',
    amount: '10.00',
    date: 'Jun 1, 2022',
    users: [
      'assets/images/av1.svg',
      'assets/images/av2.svg',
      'assets/images/av3.svg',
    ],
  },
];
