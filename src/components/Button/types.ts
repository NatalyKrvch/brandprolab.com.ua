export type ButtonColor = 'teal' | 'white';

export interface ButtonProps {
  onClick?: () => void;
  variant?: ButtonColor;
}
