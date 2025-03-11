export const getContainerClass = (fullWidth: boolean) =>
  ['mx-auto', !fullWidth && 'max-w-container px-4 tablet:px-12 desktop:px-12']
    .filter(Boolean)
    .join(' ');
