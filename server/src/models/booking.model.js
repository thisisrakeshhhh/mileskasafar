import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    packageId: { type: mongoose.Schema.Types.ObjectId, ref: "Package", required: true },
    numberOfTravelers: { type: Number, required: true },
    travelerNames: [{ type: String, required: true }],
    totalPrice: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now },
    travelDate: { type: Date, required: true },
    status: { type: String, enum: ["pending", "confirmed", "cancelled", "completed"], default: "pending" },
    paymentStatus: { type: String, enum: ["unpaid", "paid", "refunded"], default: "unpaid" },
    specialRequests: { type: String }
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
