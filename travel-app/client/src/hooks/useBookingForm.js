import { useState } from 'react';
import { createBooking, buildWhatsAppLink } from '../services/bookingService';

const initialState = {
  // Step 1 — Customer Information
  fullName: '',
  phoneNumber: '',
  whatsappNumber: '',
  email: '',
  specialRequest: '',

  // Step 2 — Journey Details
  seatCapacity: '',
  vehicleType: 'AC', // 'AC' | 'NonAC'

  // Step 3 — Trip Information
  from: '',
  to: '',
  pickupDate: '',
  pickupTime: '',

  // Step 4 — Package Selection
  fullPackageRequired: false,

  // Step 5 — Passenger Information
  adults: 1,
  children: 0,
  luggage: 0,

  // Step 6 — Journey Type
  journeyType: 'oneWay', // 'oneWay' | 'roundTrip'
};

export function useBookingForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Generic field updater — used for text inputs, selects, dates, radios
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Counter helper — used for Adults / Children / Luggage, with floors
  const adjustCounter = (field, delta, min = 0) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Math.max(min, prev[field] + delta),
    }));
  };

  const validate = () => {
    if (!formData.fullName.trim()) return 'Full name is required';
    if (!formData.phoneNumber.trim()) return 'Phone number is required';
    if (!formData.from.trim()) return 'Pickup location (From) is required';
    if (!formData.to.trim()) return 'Drop location (To) is required';
    if (!formData.pickupDate) return 'Pickup date is required';
    return null;
  };

  const submitBooking = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return { success: false, error: validationError };
    }

    setError(null);
    setIsSubmitting(true);

    try {
      // 1. Try saving to backend (works once your friend's API is live)
      await createBooking(formData).catch((err) => {
        // Don't block the WhatsApp flow if backend isn't ready yet —
        // just log it. Remove this catch once the API is required.
        console.warn('Backend not reachable yet:', err.message);
      });

      // 2. Always open WhatsApp with a prefilled message
      const whatsappLink = buildWhatsAppLink(formData);
      window.open(whatsappLink, '_blank');

      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => setFormData(initialState);

  return {
    formData,
    updateField,
    adjustCounter,
    submitBooking,
    resetForm,
    isSubmitting,
    error,
  };
}