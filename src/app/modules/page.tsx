'use client';

import { Container } from '@/components';
import { FooterSection } from '@/modules';

const Modules = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Modules</h1>
      </div>
      <div>
        <Container className="mt-4">
          <FooterSection offerURL="https://drive.google.com/file/d/19b3gy_p3hxoSTFomCbQsI7ZL4L20iyIB/view?usp=sharing" />
        </Container>
      </div>
    </>
  );
};

export default Modules;
