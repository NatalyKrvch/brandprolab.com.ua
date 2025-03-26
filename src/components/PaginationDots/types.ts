export interface PaginationDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
  className?: string;
}
