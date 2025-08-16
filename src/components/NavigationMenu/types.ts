export type MenuItemType = {
  _key: string;
  _type: 'menuItem';
  label: string;
  link: string;
};

export interface NavigationMenuProps {
  menuItems: MenuItemType[];
  className?: string;
}
