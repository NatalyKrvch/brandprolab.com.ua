export interface PaginationDotsProps {
  amount: number;
  current: number;
  onDotClick: (index: number) => void;
  className?: string;
}
