export interface PictureSource {
  srcSet: string;
  media: string;
}

export interface AdaptiveImageProps {
  sources: PictureSource[];
  fallbackSrc: string | null;
  alt: string;
  className?: string;
}
