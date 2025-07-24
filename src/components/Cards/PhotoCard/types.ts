export interface PhotoCardProps {
  photoUrl: string;
  cardHeight: number;
  imageWidth: number;
  imageHeight: number;
  backgroundUrl: string;
  imageContainerClassName?: string;
  className?: string;
  hasPriority?: boolean;
  text?: string;
  photoAlt?: string;
}
