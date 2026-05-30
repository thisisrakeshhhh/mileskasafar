import { Router } from "express";
import { cancelBooking, createBooking, getBookingById, getUserBookings, updateBookingStatus } from "../controllers/booking.controller.js";
import { adminMiddleware, authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createBooking);
router.get("/", authMiddleware, getUserBookings);
router.get("/:id", authMiddleware, getBookingById);
router.put("/:id/cancel", authMiddleware, cancelBooking);
router.put("/:id/status", adminMiddleware, updateBookingStatus);

export default router;
