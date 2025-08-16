'use client';

import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

import {
  BurgerMenu,
  Container,
  NavigationMenu,
  SocialIcons,
} from '@/components';
import { MENU_PANEL_ID } from '@/lib/constants';

import type { HeaderProps } from './types';

const Header = ({ headerData, id }: HeaderProps) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  if (!headerData) return null;

  return (
    <header
      id={id}
      className="fixed left-0 top-0 z-50 w-full bg-whiteLightOpacity"
    >
      <Container className="flex h-12 cursor-default items-center justify-between tablet:h-72 desktop:h-96">
        <div className="ml-2 flex items-center gap-80 desktop:ml-8 desktop:items-center">
          <p className="text-base font-normal leading-22 tracking-normal text-blue-default tablet:text-22 tablet:leading-7 desktop:text-22 desktop:leading-7">
            {headerData.siteTitle}
          </p>

          <NavigationMenu
            className="hidden desktop:flex"
            menuItems={headerData.menuItems}
          />
        </div>

        <div className="flex items-center gap-4 desktop:mr-8">
          <button
            aria-label="Відкрити меню"
            aria-expanded={isBurgerOpen}
            aria-controls={MENU_PANEL_ID}
            className={twMerge('flex p-2 desktop:hidden')}
            onClick={() => setIsBurgerOpen(true)}
          >
            <HiMenuAlt3 className="h-6 w-6 text-blue-default tablet:h-8 tablet:w-8" />
          </button>

          <SocialIcons
            className="hidden desktop:flex"
            socialLinks={headerData.socialLinks}
            isColored
          />
        </div>
      </Container>

      <div id={MENU_PANEL_ID}>
        <BurgerMenu
          isOpen={isBurgerOpen}
          onClose={() => setIsBurgerOpen(false)}
          menuItems={headerData.menuItems}
          socialLinks={headerData.socialLinks}
        />
      </div>
    </header>
  );
};

export default Header;
