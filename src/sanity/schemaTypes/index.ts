import { type SchemaTypeDefinition } from 'sanity';

import { casesSectionSchema } from './casesSectionSchema';
import { diagnosticSectionSchema } from './diagnosticSectionSchema';
import { expertiseSectionSchema } from './expertiseSectionSchema';
import { footerSectionSchema } from './footerSectionSchema';
import { headerSectionSchema } from './headerSectionSchema';
import { heroSectionSchema } from './heroSectionSchema';
import { servicesSectionSchema } from './servicesSectionSchema';
import { subscribeSectionSchema } from './subscribeSectionSchema';
import { testimonialsSectionSchema } from './testimonialsSectionSchema';
import { videoSectionSchema } from './videoSectionSchema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    casesSectionSchema,
    diagnosticSectionSchema,
    expertiseSectionSchema,
    headerSectionSchema,
    heroSectionSchema,
    servicesSectionSchema,
    subscribeSectionSchema,
    testimonialsSectionSchema,
    videoSectionSchema,
    footerSectionSchema,
  ],
};
