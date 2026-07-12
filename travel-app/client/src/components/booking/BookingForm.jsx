import { Phone, Mail, MessageCircle, MapPin, Calendar, Clock, Users, Briefcase, Send } from 'lucide-react';
import { useBookingForm } from '../../hooks/useBookingForm';
import FormSection from './FormSection';
import { FormInput, FormTextarea, FormSelect } from './FormFields';
import ToggleGroup from './ToggleGroup';
import Counter from './Counter';

export default function BookingForm() {
  const { formData, updateField, adjustCounter, submitBooking, isSubmitting, error } = useBookingForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitBooking();
  };

  return (
   <section
  id="book"
  className="bg-white px-6 py-20 sm:px-12 lg:px-20"
>   <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-form-badgeBg px-4 py-1.5 text-sm font-semibold text-form-badgeText">
          Booking
        </span>
        <h2 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
          Plan your trip in{' '}
          <span className="bg-headline-gradient bg-clip-text text-transparent">under a minute</span>
        </h2>
        <p className="mt-4 text-lg text-form-textMuted">
          Tell us where you're heading. We'll match the perfect vehicle and confirm on WhatsApp.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-12 max-w-4xl space-y-8 rounded-3xl border border-form-border bg-white p-8 shadow-xl shadow-brand-primary/5 sm:p-10"
      >
        {/* 1. Customer Information */}
        <FormSection number={1} title="Customer Information">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormInput
              label="Full Name"
              value={formData.fullName}
              onChange={(v) => updateField('fullName', v)}
              placeholder="Jane Doe"
            />
            <FormInput
              label="Phone Number"
              icon={<Phone size={15} />}
              type="tel"
              value={formData.phoneNumber}
              onChange={(v) => updateField('phoneNumber', v)}
              placeholder="+91 98765 43210"
            />
            <FormInput
              label="WhatsApp Number"
              icon={<MessageCircle size={15} />}
              type="tel"
              value={formData.whatsappNumber}
              onChange={(v) => updateField('whatsappNumber', v)}
              placeholder="+91 98765 43210"
            />
            <FormInput
              label="Email Address"
              icon={<Mail size={15} />}
              type="email"
              value={formData.email}
              onChange={(v) => updateField('email', v)}
              placeholder="you@example.com"
            />
          </div>
          <div className="mt-5">
            <FormTextarea
              label="Special Request"
              value={formData.specialRequest}
              onChange={(v) => updateField('specialRequest', v)}
              placeholder="Anything we should know? (child seat, accessibility, stops…)"
            />
          </div>
        </FormSection>

        {/* 2. Journey Details */}
        <FormSection number={2} title="Journey Details">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormSelect
              label="Vehicle Seat Capacity"
              value={formData.seatCapacity}
              onChange={(v) => updateField('seatCapacity', v)}
              placeholder="Select seats"
              options={['4 seater', '6 seater', '7 seater', '12 seater', '20+ seater']}
            />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-800">Vehicle Type</label>
              <ToggleGroup
                value={formData.vehicleType}
                onChange={(v) => updateField('vehicleType', v)}
                options={[
                  { value: 'AC', label: 'AC' },
                  { value: 'NonAC', label: 'Non AC' },
                ]}
              />
            </div>
          </div>
        </FormSection>

        {/* 3. Trip Information */}
        <FormSection number={3} title="Trip Information">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormInput
              label="From"
              icon={<MapPin size={15} />}
              value={formData.from}
              onChange={(v) => updateField('from', v)}
              placeholder="Kochi"
            />
            <FormInput
              label="To"
              icon={<MapPin size={15} />}
              value={formData.to}
              onChange={(v) => updateField('to', v)}
              placeholder="Munnar"
            />
            <FormInput
              label="Pickup Date"
              icon={<Calendar size={15} />}
              type="date"
              value={formData.pickupDate}
              onChange={(v) => updateField('pickupDate', v)}
            />
            <FormInput
              label="Pickup Time"
              icon={<Clock size={15} />}
              type="time"
              value={formData.pickupTime}
              onChange={(v) => updateField('pickupTime', v)}
            />
          </div>
        </FormSection>

        {/* 4. Package Selection */}
        <FormSection number={4} title="Package Selection">
          <button
            type="button"
            onClick={() => updateField('fullPackageRequired', !formData.fullPackageRequired)}
            className={`flex w-full items-center gap-3 rounded-xl border px-5 py-3.5 text-left text-sm font-medium transition-colors ${
              formData.fullPackageRequired
                ? 'border-form-selectedBorder bg-form-selectedBg text-brand-primaryDark'
                : 'border-form-border bg-gray-50 text-gray-700'
            }`}
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                formData.fullPackageRequired ? 'border-brand-primary' : 'border-gray-300'
              }`}
            >
              {formData.fullPackageRequired && <span className="h-2 w-2 rounded-full bg-brand-primary" />}
            </span>
            Full Package Required (multi-day tour)
          </button>
        </FormSection>

        {/* 5. Passenger Information */}
        <FormSection number={5} title="Passenger Information">
          <div className="grid gap-5 sm:grid-cols-3">
            <Counter
              label="Adults"
              icon={<Users size={15} />}
              value={formData.adults}
              onIncrement={() => adjustCounter('adults', 1, 1)}
              onDecrement={() => adjustCounter('adults', -1, 1)}
            />
            <Counter
              label="Children"
              icon={<Users size={15} />}
              value={formData.children}
              onIncrement={() => adjustCounter('children', 1, 0)}
              onDecrement={() => adjustCounter('children', -1, 0)}
            />
            <Counter
              label="Luggage"
              icon={<Briefcase size={15} />}
              value={formData.luggage}
              onIncrement={() => adjustCounter('luggage', 1, 0)}
              onDecrement={() => adjustCounter('luggage', -1, 0)}
            />
          </div>
        </FormSection>

        {/* 6. Journey Type */}
        <FormSection number={6} title="Journey Type">
          <ToggleGroup
            value={formData.journeyType}
            onChange={(v) => updateField('journeyType', v)}
            options={[
              { value: 'oneWay', label: 'One Way' },
              { value: 'roundTrip', label: 'Round Trip' },
            ]}
          />
        </FormSection>

        {error && <p className="text-center text-sm font-medium text-red-600">{error}</p>}

        <div className="text-center">
        <button
  type="submit"
  disabled={isSubmitting}
  className="mx-auto flex items-center gap-2 rounded-full bg-cta-gradient px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-primary/30 transition-transform hover:scale-105 disabled:opacity-60"
>
  {isSubmitting ? "Sending..." : "Send Booking"}
  <Send size={18} />
</button>
          <p className="mt-3 text-sm text-form-textMuted">
            We'll open WhatsApp to confirm your booking instantly.
          </p>
        </div>
      </form>
    </section>
  );
}