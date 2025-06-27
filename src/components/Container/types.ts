export enum ContainerVariant {
  FULL = 'full',
  CENTERED = 'centered',
  LEFT_LIMITED = 'leftLimited',
}

export interface ContainerProps {
  variant?: ContainerVariant;
  className?: string;
}
