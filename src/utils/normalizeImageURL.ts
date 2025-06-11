import { urlFor } from '@/sanity/lib/image';

type ImageRefType = {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

export const normalizeImageURL = (imageRef: ImageRefType): string => {
  try {
    return urlFor(imageRef).url().trim();
  } catch {
    return '';
  }
};
