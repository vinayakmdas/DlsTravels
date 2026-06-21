import { body } from "express-validator";

export const bookingValidation = [
  body("fullName")
    .notEmpty()
    .withMessage("Full Name is required"),

  body("phoneNumber")
    .notEmpty()
    .withMessage("Phone Number is required"),

  body("from")
    .notEmpty()
    .withMessage("Pickup location is required"),

  body("to")
    .notEmpty()
    .withMessage("Drop location is required"),

  body("pickupDate")
    .notEmpty()
    .withMessage("Pickup Date is required"),
];