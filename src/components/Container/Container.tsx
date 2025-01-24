import {
  FULL_WIDTH_CONTAINER_TEST_ID,
  LIMITED_WIDTH_CONTAINER_TEST_ID,
} from '@/lib/constants';
import { ContainerProps } from './types';

const Container = ({ fullWidth, children }: ContainerProps) => {
  if (fullWidth) {
    return (
      <div className="mx-auto" data-testid={FULL_WIDTH_CONTAINER_TEST_ID}>
        {children}
      </div>
    );
  }

  return (
    <div
      className="mx-auto max-w-[1224px] px-4 tablet:px-12 desktop:px-12"
      data-testid={LIMITED_WIDTH_CONTAINER_TEST_ID}
    >
      {children}
    </div>
  );
};

export default Container;
