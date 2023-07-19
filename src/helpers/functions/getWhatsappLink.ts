const getWhatsappLink = (number: string, isMobile: boolean): string => {
  if (!/^\d+$/.test(number)) {
    throw new Error('O número deve conter apenas dígitos.');
  }

  const url = !isMobile
    ? 'https://web.whatsapp.com/send?phone='
    : 'https://api.whatsapp.com/send?phone=';

  return `${url}${number}`;
};

export default getWhatsappLink;
