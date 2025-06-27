export enum ButtonColor {
  TEAL = 'teal',
  WHITE = 'white',
}

export interface ButtonProps {
  onClick?: () => void;
  variant?: ButtonColor;
}
