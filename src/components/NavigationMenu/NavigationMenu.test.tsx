import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import NavigationMenu from './NavigationMenu';
import type { MenuItemType } from './types';

jest.mock('../Links', () => ({
  InternalLink: ({ href, className, children, _prefetch, ...rest }: any) => (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  ),
}));

jest.mock('@/utils', () => ({
  normalizeSectionHref: (link: string) => {
    if (!link) return '#';
    const id = link.trim().replace(/^#/, '').replace(/\s+/g, '-');
    return `#${id}`;
  },
}));

const menuItemsMock: MenuItemType[] = [
  { _key: '1', _type: 'menuItem', label: 'Про нас', link: 'about' },
  { _key: '2', _type: 'menuItem', label: 'Послуги', link: 'services' },
  { _key: '3', _type: 'menuItem', label: 'Контакти', link: 'contacts' },
];

describe('NavigationMenu', () => {
  it('renders all menu items correctly', () => {
    render(<NavigationMenu menuItems={menuItemsMock} />);

    menuItemsMock.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('applies custom className if provided', () => {
    render(
      <NavigationMenu menuItems={menuItemsMock} className="custom-class" />,
    );
    expect(screen.getByRole('navigation')).toHaveClass('custom-class');
  });

  it('normalizes hrefs by adding #', () => {
    render(<NavigationMenu menuItems={menuItemsMock} />);
    const links = screen.getAllByRole('link');
    expect(links.map(a => a.getAttribute('href'))).toEqual([
      '#about',
      '#services',
      '#contacts',
    ]);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<NavigationMenu menuItems={menuItemsMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
