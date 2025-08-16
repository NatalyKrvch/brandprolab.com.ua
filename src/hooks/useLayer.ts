import { useEffect, useRef, useState } from 'react';

export function useLayer({
  isOpen,
  onClose,
  animationMs = 220,
  lockScroll = true,
  restoreFocus = true,
}: {
  isOpen: boolean;
  onClose: () => void;
  animationMs?: number;
  lockScroll?: boolean;
  restoreFocus?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const lastActive = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      lastActive.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), animationMs);
      if (restoreFocus) lastActive.current?.focus?.();
      return () => clearTimeout(t);
    }
  }, [isOpen, animationMs, restoreFocus]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!lockScroll || !isOpen) return;

    const root = document.documentElement;
    const body = document.body;

    const supportsStableGutter =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('scrollbar-gutter: stable');

    const prevHtmlOverflow = root.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPR = body.style.paddingRight;

    root.style.overflow = 'hidden';

    if (!supportsStableGutter) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      if (sw > 0) body.style.paddingRight = `${sw}px`;
    }

    return () => {
      root.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPR;
    };
  }, [isOpen, lockScroll]);

  return { mounted, stateAttr: visible ? 'open' : 'closed', animationMs };
}
