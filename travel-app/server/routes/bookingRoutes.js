import express from "express";
import {
  createBooking,
  getAllBookings,
} from "../controllers/bookingController.js";

import { bookingValidation } from "../validators/bookingValidator.js";
import validationMiddleware from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post(
  "/",
  bookingValidation,
  validationMiddleware,
  createBooking
);

router.get("/", getAllBookings);

export default router;