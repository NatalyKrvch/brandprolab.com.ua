import { Container } from '@/components';
import { ALL_DATA_QUERY } from '@/lib/constants';
import {
  DiagnosticSection,
  FooterSection,
  TestimonialsSection,
  VideoSection,
} from '@/modules';
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
        <Container variant="full" className="mb-96">
          <TestimonialsSection testimonialsData={data.testimonials} />
        </Container>

        <Container className="mb-96">
          <VideoSection videoData={data.video} />
        </Container>

        <Container className="mb-96">
          <DiagnosticSection diagnosticData={data.diagnostic} />
        </Container>

        <Container className="mb-4">
          <FooterSection footerData={data.footer} />
        </Container>
      </div>
    </>
  );
};

export default Modules;
