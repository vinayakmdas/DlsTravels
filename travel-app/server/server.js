import express from "express";
import cors from "cors";                          
import bookingRoutes from "./routes/bookingRoutes.js";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());  
app.use(express.json());

app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});
const mongoURI = process.env.MONGO_URI && process.env.MONGO_URI !== "your_mongodb_connection_string"
  ? process.env.MONGO_URI
  : "mongodb://127.0.0.1:27017/dlstravel";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log(`✅ MongoDB Connected to: ${mongoURI}`);
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:");
    console.error(err);
    console.log("\n👉 Troubleshooting tips:");
    console.log("1. If running locally, check if MongoDB service is started (e.g. `net start MongoDB` or check MongoDB Compass).");
    console.log("2. If using a remote/Atlas database, configure the MONGO_URI in your 'travel-app/server/.env' file.\n");
  });

app.listen(5000, () => {
  console.log("Server running");
});
