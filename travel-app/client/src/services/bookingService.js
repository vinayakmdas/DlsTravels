
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';


const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '918848561548';


export async function createBooking(bookingData) {
  const url = `${API_BASE_URL}/bookings`;
  console.log('Calling backend:', url, bookingData);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || 'Failed to create booking');
  }

  return response.json(); // expected: { success: true, bookingId: "..." }
}


export function buildWhatsAppLink(bookingData) {
  const lines = [
    `*New Booking Request*`,
    `Name: ${bookingData.fullName}`,
    `Phone: ${bookingData.phoneNumber}`,
    `WhatsApp: ${bookingData.whatsappNumber}`,
    `Email: ${bookingData.email || '-'}`,
    `Vehicle: ${bookingData.vehicleType}, ${bookingData.seatCapacity || '-'} seats`,
    `From: ${bookingData.from}`,
    `To: ${bookingData.to}`,
    `Pickup: ${bookingData.pickupDate} ${bookingData.pickupTime}`,
    `Journey: ${bookingData.journeyType === 'roundTrip' ? 'Round Trip' : 'One Way'}`,
    `Passengers: ${bookingData.adults} adult(s), ${bookingData.children} child(ren)`,
    `Luggage: ${bookingData.luggage}`,
    bookingData.fullPackageRequired ? `Full multi-day package requested` : null,
    bookingData.specialRequest ? `Note: ${bookingData.specialRequest}` : null,
  ].filter(Boolean);

  const message = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}