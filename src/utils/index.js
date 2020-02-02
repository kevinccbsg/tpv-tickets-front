const validateNumber = value => (value.includes(',') ? value.split(',').join('') : value);

export const formatCurrency = (value) => {
  const validValue = validateNumber(value);
  return Number(validValue).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  });
};
