import { Container } from '@/components';
import { ALL_DATA_QUERY } from '@/lib/constants';
import {
  CasesSection,
  DiagnosticSection,
  FooterSection,
  ServicesSection,
  SubscribeSection,
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
        <Container variant="full" className="mb-24 desktop:mb-144">
          <CasesSection casesData={data.cases} />
        </Container>

        <Container className="mb-96 tablet:mb-108 desktop:mb-180">
          <ServicesSection servicesData={data.services} />
        </Container>

        <Container className="mb-108 tablet:mb-120 desktop:mb-48">
          <VideoSection videoData={data.video} />
        </Container>

        <Container variant="full" className="mb-80 tablet:mb-32 desktop:mb-180">
          <TestimonialsSection testimonialsData={data.testimonials} />
        </Container>

        <Container className="mb-24 tablet:mb-136 desktop:mb-48">
          <DiagnosticSection diagnosticData={data.diagnostic} />
        </Container>

        <Container className="mb-8 tablet:mb-12 desktop:mb-80">
          <SubscribeSection subscribeData={data.subscribe} />
        </Container>

        <Container className="mb-4">
          <FooterSection footerData={data.footer} />
        </Container>
      </div>
    </>
  );
};

export default Modules;
