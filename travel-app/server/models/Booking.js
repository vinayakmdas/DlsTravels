import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    whatsappNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    vehicleType: {
      type: String,
      required: true,
    },
    seatCapacity: {
      type: String,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    pickupDate: {
      type: String,
      required: true,
    },
    pickupTime: {
      type: String,
      required: true,
    },
    journeyType: {
      type: String,
      required: true,
    },
    adults: {
      type: Number,
      default: 1,
    },
    children: {
      type: Number,
      default: 0,
    },
    luggage: {
      type: String,
    },
    fullPackageRequired: {
      type: Boolean,
      default: false,
    },
    specialRequest: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;