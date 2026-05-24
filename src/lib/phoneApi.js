// Centralized phone/contact helpers for building tel/WhatsApp links
const CONTACT_PHONE = '+918886421212';

function normalizePhoneForUrl(phone = CONTACT_PHONE) {
  // Strip all non-digits. WhatsApp wa.me expects country code + number without '+' or spaces.
  return String(phone).replace(/\D/g, '');
}

export function getTelUrl(phone = CONTACT_PHONE) {
  return `tel:${phone}`;
}

export function getWhatsAppUrl({ phone = CONTACT_PHONE, text = '' } = {}) {
  const num = normalizePhoneForUrl(phone);
  const encoded = encodeURIComponent(text || '');
  return `https://wa.me/${num}${encoded ? `?text=${encoded}` : ''}`;
}

export function getContactPhone() {
  return CONTACT_PHONE;
}

export default {
  CONTACT_PHONE,
  getTelUrl,
  getWhatsAppUrl,
  getContactPhone
};
