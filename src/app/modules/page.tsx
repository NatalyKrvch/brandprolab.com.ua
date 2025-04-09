import { Container } from '@/components';
import { ALL_DATA_QUERY } from '@/lib/constants';
import { FooterSection, VideoSection } from '@/modules';
import DiagnosticSection from '@/modules/DiagnosticSection/DiagnosticSection';
import { AllData } from '@/sanity/lib/types';
import { fetchDataFromSanity } from '@/utils';

const Modules = async () => {
  const data = await fetchDataFromSanity<AllData>(ALL_DATA_QUERY);

  if (!data) {
    throw new Error('Sanity data not found. Cannot generate static page.');
  }

  return (
    <>
      <div className="mb-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Modules</h1>
      </div>
      <div>
        <Container className="mb-96">
          <VideoSection videoData={data.video} />
        </Container>

        <Container className="mb-96">
          <DiagnosticSection diagnosticData={data.diagnostic} />
        </Container>

        <Container className="mb-4">
          <FooterSection offerURL="https://drive.google.com/file/d/19b3gy_p3hxoSTFomCbQsI7ZL4L20iyIB/view?usp=sharing" />
        </Container>
      </div>
    </>
  );
};

export default Modules;
