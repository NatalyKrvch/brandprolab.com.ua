export type ContainerVariant = 'full' | 'centered' | 'leftLimited';

export interface ContainerProps {
  variant?: ContainerVariant;
  className?: string;
}
