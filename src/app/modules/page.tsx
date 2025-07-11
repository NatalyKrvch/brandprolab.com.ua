import { Section } from '@/components';
import { ContainerVariant } from '@/components/Container';
import { ALL_DATA_QUERY } from '@/lib/constants';
import {
  CasesSection,
  DiagnosticSection,
  FooterSection,
  HeroSection,
  ServicesSection,
  SubscribeSection,
  TestimonialsSection,
  VideoSection,
} from '@/modules';
import { AllData } from '@/sanity/lib/types';
import { fetchDataFromSanity, throwError } from '@/utils';

const Modules = async () => {
  const data = await fetchDataFromSanity<AllData>(ALL_DATA_QUERY);

  if (!data) {
    throwError('Sanity data not found. Cannot generate static page.');
  }

  return (
    <>
      <main>
        <div className="mb-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Modules</h1>
        </div>

        <Section
          id="hero"
          className="mb-24 desktop:mb-144"
          containerVariant={ContainerVariant.FULL}
        >
          <HeroSection heroData={data.hero} />
        </Section>

        <Section
          id="cases"
          className="mb-24 desktop:mb-144"
          containerVariant={ContainerVariant.FULL}
        >
          <CasesSection casesData={data.cases} />
        </Section>

        <Section id="services" className="mb-80 tablet:mb-108 desktop:mb-180">
          <ServicesSection servicesData={data.services} />
        </Section>

        <Section id="video" className="mb-108 tablet:mb-120 desktop:mb-48">
          <VideoSection videoData={data.video} />
        </Section>

        <Section
          id="testimonials"
          className="mb-80 tablet:mb-32 desktop:mb-180"
          containerVariant={ContainerVariant.FULL}
        >
          <TestimonialsSection testimonialsData={data.testimonials} />
        </Section>

        <Section id="diagnostic" className="mb-24 tablet:mb-136 desktop:mb-48">
          <DiagnosticSection diagnosticData={data.diagnostic} />
        </Section>

        <Section id="subscribe" className="mb-8 tablet:mb-12 desktop:mb-80">
          <SubscribeSection subscribeData={data.subscribe} />
        </Section>
      </main>

      <FooterSection footerData={data.footer} />
    </>
  );
};

export default Modules;
