const getWhatsappLink = (number: string): string => {
  if (!/^\d+$/.test(number)) {
    throw new Error('O número deve conter apenas dígitos.');
  }
  const url = 'https://api.whatsapp.com/send?phone=';

  return `${url}${number}`;
};

export default getWhatsappLink;
