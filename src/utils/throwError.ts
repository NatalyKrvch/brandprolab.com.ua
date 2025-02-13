export function throwError(message: string): never {
  console.error(`Error: ${message}`);
  throw new Error(message);
}
