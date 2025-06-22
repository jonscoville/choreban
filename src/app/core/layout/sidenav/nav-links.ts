interface NavLink {
    label: string;
    icon: string;
    route: string;
}
type NavLinks = NavLink[];

export const NAV_LINKS: NavLinks = [
    {
      label: 'Home',
      icon: 'household_supplies',
      route: 'dashboard'
    },
    {
      label: 'Chores',
      icon: 'cleaning_services',
      route: 'tasks'
    },
    // {
    //   label: 'Profile',
    //   icon: 'person',
    //   route: 'profile'
    // }
];