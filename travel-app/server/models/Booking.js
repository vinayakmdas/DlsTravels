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

    whatsappNumber: String,

    email: String,

    specialRequest: String,

    seatCapacity: String,

    vehicleType: {
      type: String,
      enum: ["AC", "NonAC"],
      default: "AC",
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
      type: Date,
      required: true,
    },

    pickupTime: String,

    fullPackageRequired: {
      type: Boolean,
      default: false,
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
      type: Number,
      default: 0,
    },

    journeyType: {
      type: String,
      enum: ["oneWay", "roundTrip"],
      default: "oneWay",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", bookingSchema);