'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

import { NavigationMenu } from '@/components/NavigationMenu';
import { useLayer } from '@/hooks';
import { BURGER_ANIMATION_MS, MODAL_ROOT_ID } from '@/lib/constants';

import { SocialIcons } from '../SocialIcons';
import { BurgerMenuSprayBg } from '../SprayBackgrounds/BurgerMenuSprayBg';
import type { BurgerMenuProps } from './types';

const BurgerMenu = ({
  isOpen,
  onClose,
  menuItems,
  panelClassName,
  navClassName,
  socialLinks,
  animationMs = BURGER_ANIMATION_MS,
  portalId = MODAL_ROOT_ID,
}: BurgerMenuProps) => {
  const { mounted, stateAttr } = useLayer({ isOpen, onClose, animationMs });
  const containerRef = useRef<HTMLDivElement | null>(null);

  if (!mounted) return null;

  const root = document.getElementById(portalId) ?? document.body;
  const isOpenState = stateAttr === 'open';

  const handleNavClickCapture: React.MouseEventHandler = e => {
    const target = e.target as HTMLElement;
    const linkEl = target.closest('a');
    if (linkEl) onClose();
  };

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 desktop:hidden"
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Закрити меню"
        onClick={onClose}
        className={twMerge(
          'absolute inset-0 bg-black/50',
          'motion-reduce:transition-none',
          'transition-opacity ease-out',
          isOpenState ? 'opacity-100' : 'opacity-0',
        )}
        style={{ transitionDuration: `${animationMs}ms` }}
      />

      <div
        onClick={e => e.stopPropagation()}
        className={twMerge(
          'absolute inset-0 flex flex-col bg-gray-dark',
          'motion-reduce:transition-none',
          'transition-[opacity,transform] ease-out',
          isOpenState
            ? 'translate-y-0 opacity-100'
            : '-translate-y-2 opacity-0',
          panelClassName,
        )}
        style={{ transitionDuration: `${animationMs}ms` }}
      >
        <div className="mb-[106px] flex h-12 justify-end px-28 py-3 tablet:mb-88 tablet:h-88 tablet:p-28">
          <button onClick={onClose} aria-label="Закрити">
            <IoCloseOutline className="h-8 w-8 text-white tablet:h-10 tablet:w-10" />
          </button>
        </div>

        <div className="relative mx-auto mb-16 flex flex-col items-center gap-4">
          <BurgerMenuSprayBg className="-z-10" />

          <Image
            src="/images/temp/Ellipse.png"
            alt="Вікторія Захарова"
            width={90}
            height={90}
            className="h-60 w-60 rounded-full tablet:h-90 tablet:w-90"
          />

          <h2 className="mt-2 text-center text-base font-light leading-22 tracking-wider text-teal-dark tablet:text-2xl">
            Вікторія Захарова
          </h2>
        </div>

        <div
          className="mx-auto mb-16 text-center"
          onClickCapture={handleNavClickCapture}
        >
          <NavigationMenu
            menuItems={menuItems}
            className={twMerge(
              '[&_a:hover]:text-teal-dark [&_a]:text-32 [&_a]:font-normal [&_a]:leading-none [&_a]:tracking-normal [&_a]:text-white',
              navClassName,
            )}
          />
        </div>

        <hr className="mx-auto mb-16 h-px w-120 border-0 bg-gray-medium tablet:w-156" />

        <SocialIcons
          socialLinks={socialLinks}
          className="flex justify-center gap-6"
        />
      </div>
    </div>,
    root,
  );
};

export default BurgerMenu;
