import { twMerge } from 'tailwind-merge';

import { normalizeSectionHref } from '@/utils';

import { InternalLink } from '../Links';
import type { NavigationMenuProps } from './types';

const NavigationMenu = ({ menuItems, className }: NavigationMenuProps) => {
  if (!menuItems || menuItems.length === 0) return null;

  return (
    <nav aria-label="Головне меню" className={twMerge(className)}>
      <ul className="flex flex-col gap-8 desktop:flex-row">
        {menuItems.map(item => (
          <li key={item._key}>
            <InternalLink
              href={normalizeSectionHref(item.link)}
              prefetch={false}
              className={twMerge(
                'text-xl font-medium leading-none tracking-normal transition-colors',
                'text-white hover:text-teal-dark tablet:text-32 desktop:text-gray-dark',
                'rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
              )}
            >
              {item.label}
            </InternalLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
