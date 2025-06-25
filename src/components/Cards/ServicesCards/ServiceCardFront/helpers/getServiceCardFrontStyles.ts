import clsx from 'clsx';

export const getServiceCardFrontStyles = (variant: 'default' | 'gradient') => {
  const isGradient = variant === 'gradient';

  return {
    background: isGradient
      ? 'mid_tablet:bg-gradient-to-r mid_tablet:from-teal-dark mid_tablet:to-blue-default desktop:bg-gradient-to-r desktop:from-teal-dark desktop:to-blue-default'
      : 'bg-white mid_tablet:hover:bg-gradient-to-b mid_tablet:hover:from-white mid_tablet:hover:via-white mid_tablet:hover:to-gray-light desktop:hover:bg-gradient-to-b desktop:hover:from-white desktop:hover:via-white desktop:hover:to-gray-light',

    header: clsx(
      'max-w-300 px-1 text-26 font-bold leading-26 tablet:max-w-350 tablet:text-28 tablet:leading-7 desktop:max-w-350 desktop:text-32 desktop:leading-8',
      isGradient
        ? 'mid_tablet:text-3xl mid_tablet:text-white desktop:text-4xl desktop:text-white'
        : 'text-black',
    ),

    description: clsx(
      'px-1 pt-3 text-base font-normal leading-22 tablet:max-w-[500px] desktop:max-w-[500px] desktop:text-lg',
      isGradient ? 'mid_tablet:text-white desktop:text-white' : 'text-black',
    ),

    label:
      'text-14 font-normal leading-14 tracking-normal text-blue-dark tablet:text-base tablet:leading-4 desktop:px-5 desktop:text-lg desktop:leading-18',

    underlined: isGradient
      ? 'font-bold mid_tablet:text-white desktop:text-lg desktop:text-white'
      : 'font-bold desktop:text-lg mid_tablet:group-hover:text-blue-dark desktop:group-hover:text-blue-dark',

    icon: isGradient ? 'block mid_tablet:hidden desktop:hidden' : 'block',

    whiteIcon: isGradient ? 'hidden mid_tablet:block desktop:block' : 'hidden',
  };
};
