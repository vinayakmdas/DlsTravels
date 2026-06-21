import Booking from "../models/Booking.js";
import Contact from "../models/Contact.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const totalContacts = await Contact.countDocuments();

    res.json({
      success: true,
      totalBookings,
      totalContacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};