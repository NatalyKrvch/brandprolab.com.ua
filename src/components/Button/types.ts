export type ButtonColor = 'teal' | 'white';

export interface ButtonProps {
  onClick?: () => void;
  color?: ButtonColor;
}
