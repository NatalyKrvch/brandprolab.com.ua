'use client';
import { useState } from 'react';

import PaginationDots from './PaginationDots';

const PaginationDotsWithState = (args: any) => {
  const [current, setCurrent] = useState(args.current ?? 0);

  return (
    <PaginationDots
      {...args}
      current={current}
      onDotClick={index => {
        setCurrent(index);
        args.onDotClick?.(index);
      }}
    />
  );
};

export default PaginationDotsWithState;
