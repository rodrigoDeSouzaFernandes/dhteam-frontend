const getWhatsappLink = (number: string): string => {
  if (!/^\d+$/.test(number)) {
    throw new Error('O número deve conter apenas dígitos.');
  }

  const isMobileDevice =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

  const url = !isMobileDevice
    ? 'https://web.whatsapp.com/send?phone='
    : 'https://api.whatsapp.com/send?phone=';

  return `${url}${number}`;
};

export default getWhatsappLink;
