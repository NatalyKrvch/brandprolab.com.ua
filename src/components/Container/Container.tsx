import { ContainerProps } from './types';

const Container = ({ fullWidth, children }: ContainerProps) => {
  if (fullWidth) {
    return <div className="mx-auto">{children}</div>;
  }

  return (
    <div className="mx-auto max-w-[1224px] px-4 tablet:px-12 desktop:px-12">
      {children}
    </div>
  );
};

export default Container;
