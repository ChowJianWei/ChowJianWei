export const validatePhoto = (file) => {
  if (!file) {
    return { isValid: false, message: 'No file provided.' };
  }
  return { isValid: true, message: '' };
};
