export const generateNonce = (): string => {
  const bytes = new Uint8Array(16);

  crypto.getRandomValues(bytes);

  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);

  return btoa(bin);
};
