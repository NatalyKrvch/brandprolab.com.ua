import type { MenuItemType } from '../NavigationMenu';
import type { SocialIcon } from '../SocialIcons';

export interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  photoUrl: string;
  socialLinks: SocialIcon[];
  menuItems: MenuItemType[];
  panelClassName?: string;
  navClassName?: string;
  animationMs?: number;
  portalId?: string;
}
