/**
 * Generate a WhatsApp deeplink with pre-filled message
 * Format: https://wa.me/{phoneNumber}?text={encodedMessage}
 */
export const generateWhatsAppLink = (
  phoneNumber: string,
  message: string
): string => {
  // Remove all non-digit characters from phone number
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};

/**
 * Create a quote message from form data
 */
export const createQuoteMessage = (formData: {
  name: string;
  email?: string;
  phone: string;
  company?: string;
  product: string;
  area?: string;
  message?: string;
}): string => {
  const lines = [
    `*Quote Request*`,
    ``,
    `Name: ${formData.name}`,
    ...(formData.email ? [`Email: ${formData.email}`] : []),
    `Phone: ${formData.phone}`,
    ...(formData.company ? [`Company: ${formData.company}`] : []),
    `Product Interest: ${formData.product}`,
    ...(formData.area ? [`Approximate Area: ${formData.area} sq ft`] : []),
    ...(formData.message ? [`Message: ${formData.message}`] : []),
  ];

  return lines.join("\n");
};

/**
 * Create a catalogue request message from form data
 */
export const createCatalogueMessage = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  catalogueName: string;
  message?: string;
}): string => {
  const lines = [
    `*Catalogue Request*`,
    ``,
    `Name: ${formData.firstName} ${formData.lastName}`,
    `Email: ${formData.email}`,
    `Phone: ${formData.phone}`,
    `Requested Catalogue: ${formData.catalogueName}`,
    ...(formData.message ? [`Additional Message: ${formData.message}`] : []),
  ];

  return lines.join("\n");
};

/**
 * Open WhatsApp with a pre-filled message
 */
export const openWhatsApp = (
  phoneNumber: string,
  message: string
): void => {
  const link = generateWhatsAppLink(phoneNumber, message);
  window.open(link, "_blank");
};
