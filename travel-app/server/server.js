import express from "express";
import bookingRoutes from "./routes/bookingRoutes.js";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";


const app = express();

app.use(express.json());

app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});
mongoose
  .connect("mongodb://127.0.0.1:27017/dlstravel")
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Server running");
});
