import { Booking } from "../models/booking.model.js";
import { Package } from "../models/package.model.js";

export async function createBooking(req, res) {
  try {
    const { packageId, numberOfTravelers, travelerNames, travelDate, specialRequests } = req.body;
    if (!req.userId || !packageId || !numberOfTravelers || !travelerNames || !travelDate) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }

    const packageItem = await Package.findById(packageId);
    if (!packageItem) {
      return res.status(404).json({ success: false, message: "Package not found" });
    }

    if (numberOfTravelers > packageItem.availableSeats) {
      return res.status(400).json({ success: false, message: "Not enough seats available" });
    }

    const totalPrice = packageItem.price * numberOfTravelers;
    const booking = await Booking.create({
      userId: req.userId,
      packageId,
      numberOfTravelers,
      travelerNames,
      totalPrice,
      travelDate,
      specialRequests
    });

    await booking.populate("packageId");
    return res.status(201).json({ success: true, message: "Booking created successfully", data: booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to create booking" });
  }
}

export async function getUserBookings(req, res) {
  try {
    const bookings = await Booking.find({ userId: req.userId }).populate("packageId").sort({ createdAt: -1 });
    return res.json({ success: true, message: "Bookings retrieved", data: bookings });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to retrieve bookings" });
  }
}

export async function getBookingById(req, res) {
  try {
    const booking = await Booking.findOne({ _id: req.params.id, userId: req.userId }).populate("packageId");
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    return res.json({ success: true, message: "Booking retrieved", data: booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to retrieve booking" });
  }
}

export async function updateBookingStatus(req, res) {
  try {
    const { status, paymentStatus } = req.body;
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status, paymentStatus }, { new: true });
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    return res.json({ success: true, message: "Booking updated", data: booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to update booking" });
  }
}

export async function cancelBooking(req, res) {
  try {
    const booking = await Booking.findOne({ _id: req.params.id, userId: req.userId });
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    if (booking.status === "completed") {
      return res.status(400).json({ success: false, message: "Cannot cancel a completed booking" });
    }
    booking.status = "cancelled";
    await booking.save();
    return res.json({ success: true, message: "Booking cancelled successfully", data: booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to cancel booking" });
  }
}
