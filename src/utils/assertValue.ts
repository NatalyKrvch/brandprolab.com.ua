import { throwError } from './throwError';

export function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined) {
    throwError(errorMessage);
  }
  return value;
}
