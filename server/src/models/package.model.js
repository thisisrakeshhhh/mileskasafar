import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    durationDays: { type: Number, required: true },
    location: { type: String, required: true },
    images: [{ type: String }],
    highlights: [{ type: String }],
    itinerary: [
      {
        day: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        activities: [{ type: String }]
      }
    ],
    maxTravelers: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  },
  { timestamps: true }
);

export const Package = mongoose.model("Package", packageSchema);
