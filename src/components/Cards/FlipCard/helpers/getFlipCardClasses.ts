export const getFlipCardWrapperClass = () =>
  'group h-full w-full cursor-pointer [perspective:1000px]';

export const getFlipCardInnerClass = (flipped: boolean) =>
  `relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
    flipped ? '[transform:rotateY(180deg)]' : ''
  }`;

export const getFlipCardSideClass = () =>
  'absolute flex h-full w-full [backface-visibility:hidden]';

export const getBackSideTransformClass = () => '[transform:rotateY(180deg)]';
