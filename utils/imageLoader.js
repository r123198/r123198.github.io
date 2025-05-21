export const getImagePath = (src) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/rafael-2025' : '';
  return `${basePath}${src}`;
}; 