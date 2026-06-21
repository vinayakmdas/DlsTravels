// ──────────────────────────────────────────────
// bookingService.js — MODEL layer
//
// This is the ONLY file that should ever call the
// backend for bookings. Components/hooks never call
// fetch() directly — they call functions from here.
// That way, when your friend's API is ready, you only
// update this ONE file, not every component.
// ──────────────────────────────────────────────

// Put the real backend URL in a .env file (see .env.example).
// Falls back to localhost so it doesn't crash before .env exists.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Your WhatsApp business number, digits only, with country code.
// e.g. India number +91 98765 43210 → "919876543210"
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '910000000000';

/**
 * Sends the booking to the backend.
 * Your friend needs to expose: POST {API_BASE_URL}/bookings
 * See BACKEND_CONTRACT.md for the exact request/response shape.
 */
export async function createBooking(bookingData) {
  const response = await fetch(`${API_BASE_URL}/bookings`, {
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

/**
 * Builds a readable WhatsApp message from the form data and
 * returns a wa.me link. Used so "Send Booking" can open WhatsApp
 * immediately, even before the backend call finishes/exists.
 */
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